/* Laptop list: Brand|Model|Processor|RAM|Storage|Display|Price (NGN)|Tag|Condition (N=Brand new, U=Tested used) */
const L = `Dell|Latitude 5420|Core i5-1145G7|8GB|256GB SSD|14" FHD|430000|Available|N
Dell|Latitude 7420|Core i7-1185G7|16GB|512GB SSD|14" FHD|520000|Popular|N
Dell|Latitude 7490|Core i5-8350U|8GB|256GB SSD|14" FHD|320000|Available|U
Dell|XPS 13 9310|Core i7-1185G7|16GB|512GB SSD|13.4" FHD+|850000|Premium|N
Dell|XPS 15 9520|Core i7-12700H|16GB|512GB SSD|15.6" FHD+|1450000|Premium|N
Dell|Inspiron 15 3520|Core i5-1235U|8GB|512GB SSD|15.6" FHD|560000|Available|N
Dell|Precision 5540|Core i7-9850H|32GB|1TB SSD|15.6" FHD|780000|Available|U
HP|EliteBook 840 G7|Core i5-10310U|16GB|512GB SSD|14" FHD|450000|Available|U
HP|EliteBook 840 G8|Core i7-1165G7|16GB|512GB SSD|14" FHD|620000|Popular|N
HP|EliteBook 830 G7|Core i5-10210U|8GB|256GB SSD|13.3" FHD|380000|Available|U
HP|EliteBook x360 1040 G7|Core i7-10810U|16GB|512GB SSD|14" FHD touch|720000|Premium|U
HP|ProBook 450 G8|Core i5-1135G7|8GB|256GB SSD|15.6" FHD|410000|Available|N
HP|ProBook 440 G9|Core i5-1235U|16GB|512GB SSD|14" FHD|600000|Available|N
HP|Pavilion 15|Ryzen 5 5500U|8GB|512GB SSD|15.6" FHD|480000|Popular|N
HP|250 G8|Core i3-1115G4|8GB|256GB SSD|15.6" HD|340000|Available|N
HP|ZBook Firefly 14 G8|Core i7-1165G7|16GB|512GB SSD|14" FHD|760000|Available|N
HP|Spectre x360 14|Core i7-1255U|16GB|1TB SSD|13.5" 3K2K OLED|1350000|Premium|N
Lenovo|ThinkPad T14 Gen 2|Core i5-1135G7|16GB|256GB SSD|14" FHD|480000|Popular|N
Lenovo|ThinkPad X1 Carbon Gen 9|Core i7-1165G7|16GB|512GB SSD|14" FHD+|850000|Premium|N
Lenovo|ThinkPad T480|Core i5-8350U|8GB|256GB SSD|14" FHD|290000|Available|U
Lenovo|ThinkPad E14 Gen 4|Core i5-1235U|8GB|512GB SSD|14" FHD|590000|Available|N
Lenovo|IdeaPad 3 15|Ryzen 5 5500U|8GB|512GB SSD|15.6" FHD|430000|Available|N
Lenovo|IdeaPad Slim 5|Core i5-1235U|16GB|512GB SSD|14" WUXGA|640000|Popular|N
Lenovo|Yoga 7i 14|Core i7-1255U|16GB|512GB SSD|14" 2.8K touch|890000|Available|N
Lenovo|Legion 5|Ryzen 7 6800H, RTX 3060|16GB|512GB SSD|15.6" FHD 165Hz|1100000|Premium|N
Apple|MacBook Air M1|Apple M1|8GB|256GB SSD|13.3" Retina|780000|Popular|U
Apple|MacBook Air M2|Apple M2|8GB|256GB SSD|13.6" Liquid Retina|1250000|Premium|N
Apple|MacBook Pro 14 M2 Pro|Apple M2 Pro|16GB|512GB SSD|14.2" Liquid Retina XDR|2100000|Premium|N
Apple|MacBook Pro 13 M1|Apple M1|8GB|256GB SSD|13.3" Retina|850000|Available|U
Apple|MacBook Air 15 M2|Apple M2|8GB|256GB SSD|15.3" Liquid Retina|1550000|Premium|N
Asus|VivoBook 15|Core i5-1235U|8GB|512GB SSD|15.6" FHD|470000|Available|N
Asus|ZenBook 14 OLED|Core i7-1260P|16GB|512GB SSD|14" 2.8K OLED|950000|Premium|N
Asus|ROG Strix G15|Ryzen 7 6800H, RTX 3060|16GB|512GB SSD|15.6" FHD 165Hz|1250000|Premium|N
Asus|TUF Gaming F15|Core i5-11400H, GTX 1650|8GB|512GB SSD|15.6" FHD 144Hz|780000|Popular|N
Asus|ExpertBook B1|Core i5-1235U|8GB|256GB SSD|14" FHD|520000|Available|N
Acer|Aspire 5|Core i5-1235U|8GB|512GB SSD|15.6" FHD|490000|Available|N
Acer|Swift 3|Ryzen 5 5500U|8GB|512GB SSD|14" FHD|520000|Available|N
Acer|Nitro 5|Core i5-12500H, RTX 3050|16GB|512GB SSD|15.6" FHD 144Hz|980000|Popular|N
Acer|TravelMate P2|Core i5-1135G7|8GB|256GB SSD|14" FHD|430000|Available|N
Microsoft|Surface Laptop 4|Core i5-1135G7|8GB|256GB SSD|13.5" PixelSense|620000|Available|U
Microsoft|Surface Laptop 3|Core i5-1035G7|8GB|256GB SSD|13.5" PixelSense|420000|Available|U
MSI|Modern 14|Core i5-1155G7|8GB|512GB SSD|14" FHD|520000|Available|N
MSI|Katana GF66|Core i7-12700H, RTX 3060|16GB|512GB SSD|15.6" FHD 144Hz|1150000|Premium|N
Samsung|Galaxy Book2 Pro|Core i5-1240P|16GB|512GB SSD|13.3" AMOLED|890000|Premium|N
Samsung|Galaxy Book3|Core i5-1335U|8GB|512GB SSD|15.6" FHD|690000|Available|N
Razer|Blade 14|Ryzen 9 6900HX, RTX 3070 Ti|16GB|1TB SSD|14" QHD 165Hz|2400000|Premium|N
Huawei|MateBook D 15|Core i5-1135G7|8GB|512GB SSD|15.6" FHD|460000|Available|N
LG|gram 14|Core i7-1260P|16GB|512GB SSD|14" WUXGA|1050000|Premium|N
Gigabyte|G5|Core i5-12500H, RTX 3050|8GB|512GB SSD|15.6" FHD 144Hz|820000|Available|N
Dynabook|Tecra A40|Core i5-1135G7|8GB|256GB SSD|14" FHD|400000|Available|N`;
const PRODUCTS = L.split("\n").map((r) => {
  const [b, m, cpu, ram, st, dp, pr, tag, c] = r.split("|");
  return {
    brand: b,
    name: b + " " + m,
    cat: "Laptops",
    price: +pr,
    tag,
    spec: `${cpu}, ${ram}, ${st}`,
    specs: [
      ["Brand", b],
      ["Model", m],
      ["Processor", cpu],
      ["Memory", ram],
      ["Storage", st],
      ["Display", dp],
      ["Condition", c === "N" ? "Brand new" : "Tested used"],
    ],
  };
});
[
  ["Wireless Mouse", "Accessories", 8500, "Available", "2.4GHz, silent click"],
  ["Mechanical Keyboard", "Accessories", 32000, "Popular", "Backlit, USB-C"],
  ["Dual-Band WiFi Router", "Routers", 38000, "Popular", "AC1200, 4 antennas"],
  ["WiFi 6 Router", "Routers", 75000, "Premium", "AX3000, gigabit ports"],
  ["512GB Portable SSD", "Storage & Memory", 62000, "Available", "USB 3.2, 1000MB/s"],
  ["16GB DDR4 RAM", "Storage & Memory", 35000, "Available", "3200MHz laptop SODIMM"],
  ["Laptop Backpack", "Laptop Essentials", 22000, "Available", "Fits up to 15.6 inch"],
  ["65W Laptop Charger", "Laptop Essentials", 18000, "Available", "Universal, multiple tips"],
].forEach(([n, c, p, t, s]) =>
  PRODUCTS.push({
    brand: "Accessory",
    name: n,
    cat: c,
    price: p,
    tag: t,
    spec: s,
    specs: [
      ["Category", c],
      ["Details", s],
    ],
  }),
);
PRODUCTS.forEach((p, i) => (p.id = i));
const CATS = ["Laptops", "Accessories", "Routers", "Storage & Memory", "Laptop Essentials"];
const TAGC = { Available: "#2f9e5b", Popular: "#2447c8", Premium: "#c8923a" };
const WA_NUMBER =
  "2348030612964"; /* replace with the vendor's WhatsApp number, digits only, with country code */
const slug = (n) =>
  n
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
const IMG_EXTS = ["jpg", "jpeg", "png", "webp"];
function nextImg(el, s) {
  const i = +el.dataset.i + 1;
  if (i < IMG_EXTS.length) {
    el.dataset.i = i;
    el.src = `images/${s}.${IMG_EXTS[i]}`;
  } else el.remove();
}
const imgTag = (p) =>
  `<img src="images/${slug(p.name)}.jpg" alt="${p.name}" loading="lazy" data-i="0" onerror="nextImg(this,'${slug(p.name)}')">`;
const naira = (n) => "₦" + n.toLocaleString("en-NG");
const waLink = (p) => {
  const rows = p.specs
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  return (
    `https://wa.me/${WA_NUMBER}?text=` +
    encodeURIComponent(
      `Hello Another Planet Technology (APT), I'd like to order this item:\n\n*${p.name}*\nPrice: ${naira(p.price)}\n${rows}\n\nIs it still available?`,
    )
  );
};
const $ = (s) => document.querySelector(s);
function card(p) {
  return `<article class="card"><div class="ph">${imgTag(p)}Image: ${p.name}</div><span class="tag" style="background:${TAGC[p.tag]}">${p.tag}</span><h4>${p.name}</h4><small>${p.spec}</small><div class="price">${naira(p.price)}</div><div class="btns"><button class="btn view" onclick="openDetails(${p.id})"><span class="lg">View </span>Details</button><a class="btn wabtn" target="_blank" rel="noopener" href="${waLink(p)}">Order<span class="lg"> on WhatsApp</span></a></div></article>`;
}
function openDetails(id) {
  const p = PRODUCTS[id],
    d = $("#dlg");
  $("#dn").textContent = p.name;
  $(".dgrid .ph").innerHTML = imgTag(p) + "Image: " + p.name;
  $("#dp").textContent = naira(p.price);
  $("#dtag").textContent = p.tag;
  $("#dtag").style.background = TAGC[p.tag];
  $("#dt").innerHTML = p.specs.map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join("");
  $("#dw").href = waLink(p);
  d.showModal();
  history.replaceState(null, "", "?id=" + id);
}
function closeDetails() {
  $("#dlg").close();
}
const dlg = $("#dlg");
dlg.addEventListener("click", (e) => {
  if (e.target === dlg) closeDetails();
});
dlg.addEventListener("close", () => {
  const u = new URL(location);
  u.searchParams.delete("id");
  history.replaceState(null, "", u);
});
document.querySelectorAll(".wa-link").forEach((a) => (a.href = "https://wa.me/" + WA_NUMBER));
$("#menu").onclick = () => $(".links").classList.toggle("open");
const feat = $("#featured");
if (feat) {
  const F = [
    "HP EliteBook 840 G8",
    "Dell Latitude 7420",
    "Apple MacBook Air M2",
    "Lenovo ThinkPad T14 Gen 2",
  ];
  feat.innerHTML = PRODUCTS.filter((p) => F.includes(p.name))
    .map(card)
    .join("");
}
const pic = (stem, alt) =>
  `<img src="images/${stem}.jpg" alt="${alt}" loading="lazy" data-i="0" onerror="nextImg(this,'${stem}')">`;
const CAT_IMG = [
  "category-laptops",
  "category-accessories",
  "category-routers",
  "category-storage-memory",
  "category-laptop-essentials",
];
const cg = $("#cats");
if (cg)
  cg.innerHTML = CATS.map(
    (c, i) =>
      `<a class="cat" href="products.html?cat=${encodeURIComponent(c)}"><div class="ph">${pic(CAT_IMG[i], c)}Image</div>${c}</a>`,
  ).join("");
const putPic = (sel, stem, alt) => {
  const el = $(sel);
  if (el) el.insertAdjacentHTML("afterbegin", pic(stem, alt));
};
putPic(".hero .ph", "hero-laptops", "Laptops");
putPic(".promo .ph", "promo-upgrade-your-setup", "Upgrade your setup");
[
  ["accessory-tile-laptop-bags", "Laptop bags"],
  ["accessory-tile-wireless-mouse", "Wireless mouse"],
  ["accessory-tile-keyboards", "Keyboards"],
  ["accessory-tile-laptop-chargers", "Laptop chargers"],
  ["accessory-tile-ssd-drives", "SSD drives"],
].forEach(([stem, alt], i) => {
  const el = document.querySelectorAll(".acc .ph")[i];
  if (el) el.insertAdjacentHTML("afterbegin", pic(stem, alt));
});
const list = $("#list");
if (list) {
  let cat = "All";
  const q = $("#q"),
    sort = $("#sort"),
    brand = $("#brand"),
    chips = $("#chips");
  const params = new URLSearchParams(location.search);
  if (CATS.includes(params.get("cat"))) cat = params.get("cat");
  if (params.get("q")) q.value = params.get("q");
  chips.innerHTML = ["All", ...CATS]
    .map((c) => `<button class="chip" data-c="${c}">${c}</button>`)
    .join("");
  const brands = [...new Set(PRODUCTS.filter((p) => p.cat === "Laptops").map((p) => p.brand))];
  brand.innerHTML =
    '<option value="">All laptop brands</option>' +
    brands.map((b) => `<option>${b}</option>`).join("");
  function render() {
    chips.querySelectorAll(".chip").forEach((b) => b.classList.toggle("on", b.dataset.c === cat));
    const t = q.value.toLowerCase();
    let r = PRODUCTS.filter(
      (p) =>
        (cat === "All" || p.cat === cat) &&
        (!brand.value || p.brand === brand.value) &&
        (p.name + " " + p.spec).toLowerCase().includes(t),
    );
    if (sort.value === "lo") r.sort((a, b) => a.price - b.price);
    if (sort.value === "hi") r.sort((a, b) => b.price - a.price);
    $("#total").textContent = r.length + " product" + (r.length === 1 ? "" : "s");
    list.innerHTML = r.length
      ? r.map(card).join("")
      : `<p class="empty">No products match your search. Try a different word, brand or category.</p>`;
  }
  chips.onclick = (e) => {
    if (e.target.dataset.c) {
      cat = e.target.dataset.c;
      render();
    }
  };
  q.oninput = sort.onchange = brand.onchange = render;
  render();
}
const idp = new URLSearchParams(location.search).get("id");
if (idp !== null && PRODUCTS[+idp]) openDetails(+idp);
