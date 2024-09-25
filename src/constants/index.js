import {
  chevronRight,
  colorApple,
  creditCard,
  devices,
  happy,
  northEastArrow,
  truck,
} from "../assets/icons";
import {
  appleCare,
  appleServices,
  appleSpecialist,
  appleSupportVidThumbnail,
  businessCard,
  homeKit,
  homePodMid,
  instigators,
  keyRing,
  latest1,
  latest2,
  latest3,
  latest4,
  latest5,
  latest6,
  loop46,
  loop49,
  mac,
  pencil,
  personalSession,
  pods2,
  pods4,
  podsMidNight,
  proCase,
  siliconCase,
  solo4,
  todayAtApp,
} from "../assets/images";
import { iPad } from "../assets/images";
import { airPods } from "../assets/images";
import { tv } from "../assets/images";
import { iAccessories } from "../assets/images";
import { homePod } from "../assets/images";
import { airTag } from "../assets/images";
import { watch } from "../assets/images";
import { iPhone } from "../assets/images";
import { apple } from "../assets/images";
import { appleVisit } from "../assets/images";
import { customer2 } from "../assets/images";

export const navLinks = [
  { href: "#store", label: "Store" },
  { href: "#mac", label: "Mac" },
  { href: "#iPad", label: "iPad" },
  { href: "#iPhone", label: "iPhone" },
  { href: "#watch", label: "Watch" },
  { href: "#airPods", label: "AirPods" },
  { href: "#tv&home", label: "TV & Home" },
  { href: "#entertainment", label: "Entertainment" },
  { href: "#accessories", label: "Accessories" },
  { href: "#support", label: "Support" },
];

export const specialistAndFindStore = [
  {
    imgURL: customer2,
    title: "Need shopping help?",
    linkText: "Ask a Specialist",
    href: "#ask-specialist",
    iconURL: northEastArrow,
  },
  {
    imgURL: apple,
    title: "Visit an Apple Store",
    linkText: "Find one near you",
    href: "#find-store",
    iconURL: chevronRight,
  },
];
export const products = [
  {
    imgURL: mac,
    name: "Mac",
    href: "#mac",
  },
  {
    imgURL: iPhone,
    name: "iPhone",
    href: "#iphone",
  },
  {
    imgURL: iPad,
    name: "iPad",
    href: "#ipad",
  },
  {
    imgURL: watch,
    name: "Apple Watch",
    href: "#apple-watch",
  },
  {
    imgURL: airPods,
    name: "AirPods",
    href: "#air-pods",
  },
  {
    imgURL: airTag,
    name: "AirTag",
    href: "#air-tag",
  },
  {
    imgURL: tv,
    name: "Apple TV 4K",
    href: "#apple-tv-4k",
  },
  {
    imgURL: homePod,
    name: "HomePod",
    href: "#home-pod",
  },
  {
    imgURL: iAccessories,
    name: "Accessories",
    href: "#i-accessories",
  },
];

export const latestProducts = [
  {
    type: "PRE-ORDER NOW",
    title: "iPhone 16 Pro",
    subtitle: "Built for Apple Intelligence.◊ ",
    info: "",
    priceText: "From ₹119900.00‡",
    imgURL: latest1,
    textColor: "white",
  },
  {
    type: "PRE-ORDER NOW",
    title: "iPhone 16",
    subtitle: "Built for Apple Intelligence.◊",
    info: "",
    priceText: "From ₹79900.00‡",
    imgURL: latest2,
    textColor: "white",
  },
  {
    type: "PRE-ORDER NOW",
    title: "Apple Watch Series 10",
    subtitle: "Thinstant classic.",
    info: "",
    priceText: "From ₹46900.00‡",
    imgURL: latest3,
    textColor: "black",
  },
  {
    type: "PRE-ORDER NOW",
    title: "Apple Watch Ultra 2",
    subtitle: "New finish. Never quit.",
    info: "",
    priceText: "From ₹89900.00‡",
    imgURL: latest4,
    textColor: "white",
  },
  {
    type: "PRE-ORDER NOW",
    title: "AirPods 4",
    subtitle: "Iconic. Now supersonic.",
    info: `AirPods 4 ₹12900.00§
        AirPods 4 with Active Noise Cancellation ₹17900.00§ `,
    priceText: "",
    imgURL: latest6,
    textColor: "black",
  },
];

export const helps = [
  {
    type: "APPLE SPECIALIST",
    title: "Shop one on one with a Specialist online.",
    subtitle: "",
    info: "",
    imgURL: appleSpecialist,
    textColor: "black",
  },
  {
    type: "BUSINESS",
    title: "From enterprise to small business, we’ll work with you.1",
    subtitle: "",
    info: "",
    priceText: "",
    imgURL: businessCard,
    textColor: "white",
  },
  {
    type: "TODAY AT APPLE",
    title: "Gear up for university.",
    subtitle: "",
    info: "Go back to school with Mac and iPad. Join free sessions at the Apple Store.",
    priceText: "",
    imgURL: todayAtApp,
    textColor: "black",
  },
  {
    type: "",
    title:
      "Get help setting up your new device in a free Online Personal Session.",
    subtitle: "",
    info: "",
    priceText: "",
    imgURL: personalSession,
    textColor: "black",
  },
  {
    type: "WATCH AND LEARN",
    title: "Need support? Our teams are here for you.",
    subtitle: "",
    info: ``,
    priceText: "",
    imgURL: appleSupportVidThumbnail,
    textColor: "black",
  },
];

export const differences = [
  {
    iconURL: creditCard,
    mainText: "Flexible ways to pay.",
    mainTextColor: "text-green-500",
    extraText: "Plus instant cashback§§ and No Cost EMI.§",
    extraTextColor: "text-black",
  },
  {
    iconURL: devices,
    mainText: "Exchange your smartphone, ",
    mainTextColor: "text-blue-400",
    extraText: "get ₹4000.00 – ₹67500.00 in credit towards a new one.*",
    extraTextColor: "text-black",
  },
  {
    iconURL: colorApple,
    mainText: "Customise your Mac.",
    mainTextColor: "text-red-400",
    extraText: "",
    extraTextColor: "",
  },
  {
    iconURL: happy,
    mainText: "Make them yours. ",
    mainTextColor: "text-black",
    extraText: "Engrave a mix of emoji, names and numbers for free.",
    extraTextColor: "text-blue-700",
  },
  {
    iconURL: truck,
    mainText: "Enjoy free delivery, ",
    mainTextColor: "text-green-500",
    extraText: "or easy pickup from an Apple Store.",
    extraTextColor: "text-black",
  },
  {
    iconURL: devices,
    mainText:
      "Trade in your eligible Mac, Apple Watch or iPad for instant credit.*",
    mainTextColor: "text-blue-400",
    extraText: "In-store only.",
    extraTextColor: "text-black",
  },
];

export const accessories = [
  {
    imgURL: proCase,
    type: "New",
    name: "iPhone 16 Pro Clear Case with MagSafe",
    priceText: "MRP ₹4900.00 (Incl. of all taxes)",
  },
  {
    imgURL: loop46,
    type: "New",
    name: "46mm Plum Sport Loop",
    priceText: "MRP ₹4500.00 (Incl. of all taxes)",
  },
  {
    imgURL: loop49,
    type: "New",
    name: "49mm Black Titanium Milanese Loop - Medium",
    priceText: "MRP ₹24500.00 (Incl. of all taxes)",
  },
  {
    imgURL: siliconCase,
    type: "New",
    name: "iPhone 16 Silicone Case with MagSafe - Ultramarine",
    priceText: "MRP ₹4900.00 (Incl. of all taxes)",
  },
  {
    imgURL: keyRing,
    type: "New",
    name: "AirTag FineWoven Key Ring - Chartreuse",
    priceText: "MRP ₹3900.00 (Incl. of all taxes)",
  },
  {
    imgURL: pencil,
    type: "",
    name: "Apple Pencil Pro",
    priceText: "MRP ₹11900.00 (Incl. of all taxes)",
  },
];

export const earAccs = [
  {
    imgURL: pods2,
    type: "Free Engraving",
    name: "AirPods Pro 2",
    priceText: "MRP ₹24900.00 (Incl. of all taxes)",
  },
  {
    imgURL: pods4,
    type: "Free Engraving",
    name: "AirPods 4 with Active Noise Cancellation",
    priceText: "MRP ₹17900.00 (Incl. of all taxes)",
  },
  {
    imgURL: loop49,
    type: "New",
    name: "49mm Black Titanium Milanese Loop - Medium",
    priceText: "MRP ₹24500.00 (Incl. of all taxes)",
  },
  {
    imgURL: podsMidNight,
    type: "New colours",
    name: "AirPods Max - Midnight",
    priceText: "MRP ₹59900.00 (Incl. of all taxes)",
  },
  {
    imgURL: homePodMid,
    type: "",
    name: "HomePod - Midnight",
    priceText: "MRP ₹32900.00 (Incl. of all taxes)",
  },
  {
    imgURL: solo4,
    type: "New",
    name: "Beats Solo 4 — On-Ear Wireless Headphones – Cloud Pink",
    priceText: "MRP ₹22900.00 (Incl. of all taxes)",
  },
];

export const experiences = [
  {
    type: "APPLE TV+",
    title: "Watch new Apple Originals every month.°",
    subtitle: "",
    info: "",
    imgURL: instigators,
    textColor: "white",
  },
  {
    type: "",
    title: "Four Apple services. One easy subscription.",
    subtitle: "",
    info: "",
    imgURL: appleServices,
    textColor: "black",
  },
  {
    type: "",
    title: "We’ve got you covered.",
    subtitle: "",
    info: "AppleCare+ now comes with unlimited repairs for accidental damage protection.",
    imgURL: appleCare,
    textColor: "black",
  },
  {
    type: "HOME",
    title: "See how one app can control your entire home.",
    subtitle: "",
    info: "",
    imgURL: homeKit,
    textColor: "black",
  },
];

export const footerTexts = [
  `
◊◊◊ Qualified Purchasers can receive Promotion Savings when they purchase an Eligible Product with Promotion Product at a Qualifying Location. Only one Promotion Product per Eligible Product per Qualified Purchaser. Offer subject to availability. Subject to terms and conditions here.
`,
  `
°°° The promotional Apple Education Pricing on AppleCare+ is available for eligible products only when the eligible product and AppleCare+ are purchased directly from an Apple Store or concurrently from the online Apple Store for Education during the promotional period and cannot be combined with non-promotional Apple Education Pricing. AppleCare+ attached to eligible products outside of the promotional period is not eligible for this promotional rate.
`,
  `
Apple Education Pricing is available to current and newly accepted university students and their parents, as well as teachers and staff at all levels. Quantity limits apply. During the promotional period only and cannot be combined with non-promotional Apple Education Pricing. AppleCare+ attached to eligible products outside of the promotional period is not eligible for this promotional rate.
`,
  `Apple Education Pricing is available to current and newly accepted university students and their parents, as well as teachers and staff at all levels. Quantity limits apply.`,
  `◊ Apple Intelligence will be available in beta on all iPhone 16 models, iPhone 15 Pro, and iPhone 15 Pro Max, with Siri and device language set to U.S. English, as an iOS 18 update late 2024. Some features and support for additional languages, including Indian English, French, Japanese and Spanish, will be coming over the course of the next year.`,
  `◊◊ Monthly pricing is after purchase using EMI with qualifying cards at 15.99% p.a. over a 6-month tenure. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions.`,
  `Representative example:
Based on purchase of ₹79900.00. Total amount payable ₹83667.00 paid over 6 months as 6 monthly payments of ₹13945.00 at an interest rate of 15.99% p.a. Total interest paid to bank: ₹3767.00.`,
  `
§ No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3- or 6-month tenures from most leading card issuers. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer's terms and conditions. Minimum order spend applies as per your card issuer’s threshold. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply.`,
  `
Representative example:
Based on a 6 month tenure. ₹79900.00 total cost includes 15.99% pa and No Cost EMI savings of ₹3596.00, paid over 6 months as 6 monthly payments of ₹13317.00.`,
  `
§§ Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank, and ICICI Bank cards only. Minimum transaction value of ₹10001 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback. To receive this offer, purchase must be charged to a single eligible card.`,
  `
* Mac, iPad, and Apple Watch trade-in is available only in-store in India. Apple Retail Online in India does not offer trade-in for Mac, iPad, and Apple Watch. Trade‑in values will vary based on the condition, year and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit. Trade‑in value may be applied towards a qualifying new device purchase. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel or limit the quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade‑in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.`,
  `
° Subscription required for Apple TV+.`,
  `1. Special pricing available to qualified customers. To learn more about how to start qualifying for special pricing, talk to an Apple Specialist in a store or give us a call on 000800 040 1966.`,
  `⁺ New subscribers only. ₹99/month after trial. Offer is available for new Apple Music subscribers with a new eligible device for a limited time only. Offer redemption for eligible audio devices requires connecting or pairing to an Apple device running the latest iOS or iPadOS. Offer redemption for Apple Watch requires connecting or pairing to an iPhone running the latest iOS. Offer good for three months after eligible device activation. Only one offer per Apple ID, regardless of the number of eligible devices you purchase. Plan automatically renews until cancelled. Restrictions and other terms(opens in new window) apply.`,
  `
** New and qualified returning subscribers only. ₹99/month after free trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you or your family purchases. This offer is not available if you or your Family have previously accepted an Apple Arcade 3-month-free offer. Offer is valid for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.`,
  `** Apple TV+ offer available to new and qualified returning subscribers only. ₹99/month after free trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices that you or your family purchase. This offer is not available if you or your Family have previously accepted an Apple TV+ three-months-free or one-year-free offer. Offer valid for three months after eligible device is activated. Plan automatically renews until cancelled. Restrictions and other terms apply.`,
  `‡ Listed pricing is Maximum Retail Price (inclusive of all taxes).`,
  `
We use your location to show you delivery options faster. We found your location using your IP address or because you entered it during a previous visit to Apple.`,
];


export const footerLinks = [
  {
    title: "Shop and Learn",
    items: [
      { href: "#store", label: "Store" },
      { href: "#mac", label: "Mac" },
      { href: "#ipad", label: "iPad" },
      { href: "#iphone", label: "iPhone" },
      { href: "#watch", label: "Watch" },
      { href: "#airpods", label: "AirPods" },
      { href: "#tv-home", label: "TV & Home" },
      { href: "#airtag", label: "AirTag" },
      { href: "#accessories", label: "Accessories" },
      { href: "#gift-cards", label: "Gift Cards" }
    ]
  },
  {
    title: "Apple Wallet",
    items: [
      { href: "#apple-wallet", label: "Wallet" },
    ]
  },
   {
    title: "Account",
    items: [
      { href: "#manage-id", label: "Manage Your Apple ID" },
      { href: "#store-account", label: "Apple Store Account" },
      { href: "#icloud", label: "iCloud.com" }
    ]
  },
  {
    title: "Entertainment",
    items: [
      { href: "#apple-one", label: "Apple One" },
      { href: "#apple-tv", label: "Apple TV+" },
      { href: "#apple-music", label: "Apple Music" },
      { href: "#apple-arcade", label: "Apple Arcade" },
      { href: "#apple-podcasts", label: "Apple Podcasts" },
      { href: "#apple-books", label: "Apple Books" },
      { href: "#app-store", label: "App Store" }
    ]
  },
  {
    title: "Apple Store",
    items: [
      { href: "#find-store", label: "Find a Store" },
      { href: "#genius-bar", label: "Genius Bar" },
      { href: "#today-at-apple", label: "Today at Apple" },
      { href: "#summer-camp", label: "Apple Summer Camp" },
      { href: "#ways-to-buy", label: "Ways to Buy" },
      { href: "#trade-in", label: "Apple Trade In" },
      { href: "#recycling", label: "Recycling Programme" },
      { href: "#order-status", label: "Order Status" },
      { href: "#shopping-help", label: "Shopping Help" }
    ]
  },
  {
    title: "For Business",
    items: [
      { href: "#apple-business", label: "Apple and Business" }
    ]
  },
  {
    title: "For Education",
    items: [
      { href: "#apple-education", label: "Apple and Education" },
      { href: "#shop-education", label: "Shop for Education" },
      { href: "#shop-university", label: "Shop for University" }
    ]
  },
  {
    title: "For Healthcare",
    items: [
      { href: "#apple-healthcare", label: "Apple in Healthcare" },
      { href: "#health-watch", label: "Health on Apple Watch" }
    ]
  },
  {
    title: "Apple Values",
    items: [
      { href: "#accessibility", label: "Accessibility" },
      { href: "#environment", label: "Environment" },
      { href: "#privacy", label: "Privacy" },
      { href: "#supply-chain", label: "Supply Chain" }
    ]
  },
  {
    title: "About Apple",
    items: [
      { href: "#newsroom", label: "Newsroom" },
      { href: "#leadership", label: "Apple Leadership" },
      { href: "#careers", label: "Career Opportunities" },
      { href: "#investors", label: "Investors" },
      { href: "#ethics", label: "Ethics & Compliance" },
      { href: "#events", label: "Events" },
      { href: "#contact", label: "Contact Apple" }
    ]
  }
];

export const footerLeagalLinks = [
  {href: "#privacy-policy", label: "Privacy Policy"},
  {href: "#tou", label: "Terms of Use"},
  {href: "#sales-policy", label: "Sales Policy"},
  {href: "#legal", label: "Legal"},
  {href: "#site-map", label: "Site Map"},
]