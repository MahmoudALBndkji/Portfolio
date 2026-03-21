/**
 * Writes *_details.html from scripts/detail-page-skeleton.html
 * Run: node scripts/write-detail-pages.cjs
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const skel = fs.readFileSync(
  path.join(__dirname, "detail-page-skeleton.html"),
  "utf8"
);

const pages = {
  "alsafa_exchange_details.html": "alsafa_exchange",
  "asset_management_details.html": "asset_management",
  "beacon_reader_details.html": "beacon_reader",
  "databaseManagement_details.html": "databaseManagement",
  "lister_details.html": "lister",
  "mallToGo_details.html": "mallToGo",
  "newpark_agents_details.html": "newpark_agents",
  "open_vpn_details.html": "open_vpn",
  "ponderMore_details.html": "ponderMore",
  "rds_box_details.html": "rds_box",
  "real_estate_details.html": "real_estate",
  "sallate_details.html": "sallate",
  "spot_books_pos_details.html": "spot_books_pos",
  "time_attendance_details.html": "time_attendance",
  "toKnowMe_details.html": "toKnowMe",
  "treema_details.html": "treema",
  "trasool_online_details.html": "trasool_online",
  "wafra_details.html": "wafra",
  "worldNews_details.html": "worldNews",
};

for (const [filename, id] of Object.entries(pages)) {
  const out = skel.replace(/__DETAIL_ID__/g, id);
  fs.writeFileSync(path.join(root, filename), out, "utf8");
  console.log("Wrote", filename);
}
