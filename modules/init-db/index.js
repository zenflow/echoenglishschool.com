let initDbRanOnce = false;

/**
 * If mongo database was just created, run initDb() (maximum one time)
 */
module.exports = {
  handlers(self) {
    return {
      "apostrophe:ready": {
        async maybeInitDb() {
          // abort if the mongo database wasn't just created
          if (!self.apos.isNew) {
            return;
          }
          // abort if initDb() has already run once
          if (initDbRanOnce) {
            return;
          }
          await initDb(self);
          initDbRanOnce = true;
        },
      },
    };
  },
};

async function initDb(self) {
  console.log("--- Initializing database... ---");
  const req = self.apos.task.getReq();

  await self.apos.user.insert(req, {
    username: "admin",
    password: "admin",
    title: "admin",
    role: "admin",
  });
  console.log('- Created admin user with username "admin" and password "admin".');
  console.log("  Please log in and change this password.");

  // TODO: Is there an easier way to do this?
  // TODO: What if I want to start with the published version?
  const globalDoc = await self.apos.global.findGlobal(req.clone({ mode: "draft" }));
  globalDoc.footerLinks = [
    { linkText: "Home", linkType: "custom", linkUrl: "/" },
    { linkText: "Blog", linkType: "custom", linkUrl: "/blog" },
  ];
  await self.apos.global.update(req, globalDoc);
  await self.apos.global.publish(req, globalDoc);

  console.log("--- Done initializing database ---");
}
