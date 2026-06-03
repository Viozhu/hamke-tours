// ─── Hamke Tours — Google Apps Script ────────────────────────────────────────
// Paste this entire file into Extensions → Apps Script in your Google Sheet.
// Then run setupHamke() once (grant permissions when prompted).
// Deploy as Web App: Execute as Me · Anyone can access.
// ─────────────────────────────────────────────────────────────────────────────

// ── SETUP ─────────────────────────────────────────────────────────────────────

function setupHamke() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  setupTours(getOrCreateSheet(ss, "Tours"));
  setupTestimonios(getOrCreateSheet(ss, "Testimonios"));
  setupSolicitudes(getOrCreateSheet(ss, "Solicitudes"));
  ss.toast("Hamke Tours configurado correctamente", "✅ Setup completado", 6);
}

function getOrCreateSheet(ss, name) {
  return ss.getSheetByName(name) || ss.insertSheet(name);
}

function applyHeaderStyle(range) {
  range
    .setBackground("#1a3a4a")
    .setFontColor("#ffffff")
    .setFontWeight("bold")
    .setFontSize(11)
    .setVerticalAlignment("middle")
    .setHorizontalAlignment("center");
  range.getSheet().setRowHeight(1, 36);
}

function applyAlternatingRows(sheet, numCols, numRows) {
  for (let r = 2; r <= numRows; r++) {
    sheet
      .getRange(r, 1, 1, numCols)
      .setBackground(r % 2 === 0 ? "#f0f4f8" : "#ffffff");
  }
}

// ── TOURS SHEET ───────────────────────────────────────────────────────────────

function setupTours(sheet) {
  sheet.clearContents();
  sheet.clearFormats();
  sheet.clearConditionalFormatRules();

  const headers = [
    "ID", "Temporada", "Título", "Fechas", "Días",
    "Estado", "Destacado", "Descripción", "Destinos",
    "Precio", "Cupos", "Imagen"
  ];
  const numCols = headers.length;

  const headerRange = sheet.getRange(1, 1, 1, numCols);
  headerRange.setValues([headers]);
  applyHeaderStyle(headerRange);
  sheet.setFrozenRows(1);

  const widths = [120, 100, 160, 140, 60, 90, 80, 280, 260, 130, 70, 200];
  widths.forEach((w, i) => sheet.setColumnWidth(i + 1, w));

  // Estado dropdown
  const estadoRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(["open", "wait", "soon", "draft"], true)
    .setAllowInvalid(false)
    .setHelpText("open = abierto · wait = lista de espera · soon = próximamente · draft = oculto")
    .build();
  sheet.getRange("F2:F200").setDataValidation(estadoRule);

  // Destacado checkbox
  sheet.getRange("G2:G200").insertCheckboxes();

  // Destinos dropdown
  const destinosRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(
      ["Seúl", "DMZ", "Nami Island", "Suwon", "Gyeongju", "Busan", "Jinhae", "Jeju", "Gangwon"],
      true
    )
    .setAllowInvalid(true)
    .setHelpText("Escribe destinos separados por coma, ej: Seúl, DMZ, Busan")
    .build();
  sheet.getRange("I2:I200").setDataValidation(destinosRule);

  // Conditional formatting — Estado
  const estadoRangeRef = sheet.getRange("F2:F200");
  const cfRules = [
    ["open",  "#d4edda", "#155724"],
    ["wait",  "#fff3cd", "#856404"],
    ["soon",  "#cce5ff", "#004085"],
    ["draft", "#e2e3e5", "#383d41"],
  ].map(([value, bg, fg]) =>
    SpreadsheetApp.newConditionalFormatRule()
      .whenTextEqualTo(value)
      .setBackground(bg)
      .setFontColor(fg)
      .setRanges([estadoRangeRef])
      .build()
  );
  sheet.setConditionalFormatRules(cfRules);

  applyAlternatingRows(sheet, numCols, 50);
  sheet.getRange(1, 1, 50, numCols)
    .setBorder(true, true, true, true, true, true, "#d0d7de", SpreadsheetApp.BorderStyle.SOLID);

  const sample = [
    ["otono-2026",     "Otoño",     "Tour Otoño 2026",     "Octubre 2026",                10, "open", true,  "El follaje dorado de Corea en su mejor momento. Nuestra salida estrella del año.",      "Seúl, Nami Island, DMZ, Suwon, Gyeongju, Busan", "Consultar precio", 16, ""],
    ["primavera-2026", "Primavera", "Tour Primavera 2026", "Abril 2026",                   9, "wait", false, "Cerezos en flor por todo el país. La temporada más fotogénica de Corea.",              "Seúl, Jinhae, Gyeongju, Busan, Jeju",             "Consultar precio", 16, ""],
    ["invierno-2026",  "Invierno",  "Tour Invierno 2026",  "Diciembre 2026 – Enero 2027",  8, "soon", false, "Nieve, mercados de invierno, templos y luces. Corea en su versión más mágica.",       "Seúl, Nami Island, Gangwon, Busan",                "Próximamente",     16, ""],
  ];
  sheet.getRange(2, 1, sample.length, numCols).setValues(sample);

  sheet.getRange("I1").setNote(
    "Para activar multi-selección:\n" +
    "1. Selecciona columna I\n" +
    "2. Datos → Validación de datos\n" +
    "3. Activa \"Permitir selección multiple\""
  );
}

// ── TESTIMONIOS SHEET ─────────────────────────────────────────────────────────

function setupTestimonios(sheet) {
  sheet.clearContents();
  sheet.clearFormats();
  sheet.clearConditionalFormatRules();

  const headers = ["ID", "Nombre", "Lugar", "Tour", "Cita", "Foto URL", "Publicado"];
  const numCols = headers.length;

  const headerRange = sheet.getRange(1, 1, 1, numCols);
  headerRange.setValues([headers]);
  applyHeaderStyle(headerRange);
  sheet.setFrozenRows(1);

  const widths = [80, 130, 180, 130, 380, 200, 90];
  widths.forEach((w, i) => sheet.setColumnWidth(i + 1, w));

  sheet.getRange("G2:G200").insertCheckboxes();

  const pubRange = sheet.getRange("A2:G200");
  const pubRules = [
    SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied("=$G2=TRUE")
      .setBackground("#d4edda")
      .setRanges([pubRange])
      .build(),
    SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied("=$G2=FALSE")
      .setBackground("#f8f9fa")
      .setRanges([pubRange])
      .build(),
  ];
  sheet.setConditionalFormatRules(pubRules);

  applyAlternatingRows(sheet, numCols, 50);
  sheet.getRange(1, 1, 50, numCols)
    .setBorder(true, true, true, true, true, true, "#d0d7de", SpreadsheetApp.BorderStyle.SOLID);

  const sample = [
    ["t-1", "Holi M.",    "Viajera 2025 · 🇲🇽",  "otono-2026",     "Fue mejor de lo que imaginé. La paciencia y la serenidad de Chang para llevar al grupo no tienen precio. La mejor decisión que tomé.",        "", true],
    ["t-2", "Carolina R.","Tour Otoño · 🇨🇴",     "otono-2026",     "Conocer un país tan maravilloso de la mano de alguien que lo vive de verdad cambia todo. Nunca olvidaré este viaje.",                       "", true],
    ["t-3", "Diego A.",   "Tour 2024 · 🇦🇷",       "primavera-2026", "Todo en español, todo resuelto. Solo me dediqué a disfrutar. Gente increíble y momentos que me llevo para siempre.",                        "", true],
  ];
  sheet.getRange(2, 1, sample.length, numCols).setValues(sample);
}

// ── SOLICITUDES SHEET ─────────────────────────────────────────────────────────

function setupSolicitudes(sheet) {
  sheet.clearContents();
  sheet.clearFormats();
  sheet.clearConditionalFormatRules();

  const headers = [
    "Timestamp", "Nombre", "Email", "WhatsApp",
    "Tour", "Personas", "País", "Estado", "Notas"
  ];
  const numCols = headers.length;

  const headerRange = sheet.getRange(1, 1, 1, numCols);
  headerRange.setValues([headers]);
  applyHeaderStyle(headerRange);
  sheet.setFrozenRows(1);

  const widths = [160, 140, 200, 160, 140, 80, 120, 110, 300];
  widths.forEach((w, i) => sheet.setColumnWidth(i + 1, w));

  const estadoRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(["Nuevo", "Contactado", "Confirmado", "Cancelado"], true)
    .setAllowInvalid(false)
    .build();
  sheet.getRange("H2:H2000").setDataValidation(estadoRule);

  const estadoRange = sheet.getRange("H2:H2000");
  const cfRules = [
    ["Nuevo",      "#cce5ff", "#004085"],
    ["Contactado", "#fff3cd", "#856404"],
    ["Confirmado", "#d4edda", "#155724"],
    ["Cancelado",  "#f8d7da", "#721c24"],
  ].map(([value, bg, fg]) =>
    SpreadsheetApp.newConditionalFormatRule()
      .whenTextEqualTo(value)
      .setBackground(bg)
      .setFontColor(fg)
      .setRanges([estadoRange])
      .build()
  );

  const fullRange = sheet.getRange("A2:I2000");
  const rowRules = [
    ["Confirmado", "#eafaf1"],
    ["Cancelado",  "#fdf3f4"],
  ].map(([value, bg]) =>
    SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied(`=$H2="${value}"`)
      .setBackground(bg)
      .setRanges([fullRange])
      .build()
  );

  sheet.setConditionalFormatRules([...cfRules, ...rowRules]);
  sheet.getRange(1, 1, 50, numCols)
    .setBorder(true, true, true, true, true, true, "#d0d7de", SpreadsheetApp.BorderStyle.SOLID);
}

// ── doGet — PUBLIC READ API ───────────────────────────────────────────────────

function doGet(e) {
  const sheetName = (e.parameter.sheet || "").toLowerCase();
  let data;

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    if (sheetName === "tours") {
      data = readTours(ss);
    } else if (sheetName === "testimonios") {
      data = readTestimonios(ss);
    } else {
      data = { error: "Unknown sheet. Use ?sheet=tours or ?sheet=testimonios" };
    }
  } catch (err) {
    data = { error: String(err) };
  }

  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function readTours(ss) {
  const sheet = ss.getSheetByName("Tours");
  if (!sheet) return [];
  const rows = sheet.getDataRange().getValues();
  const result = [];
  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    if (!r[0]) continue;
    if (r[5] === "draft") continue;
    result.push({
      id:          String(r[0]),
      season:      String(r[1]),
      title:       String(r[2]),
      dates:       String(r[3]),
      days:        Number(r[4]),
      status:      String(r[5]),
      popular:     r[6] === true,
      blurb:       String(r[7]),
      places:      String(r[8]).split(",").map(s => s.trim()).filter(Boolean),
      priceLabel:  String(r[9]),
      cupos:       Number(r[10]),
      placeholder: String(r[11]),
      slot:        String(r[0]),
    });
  }
  return result;
}

function readTestimonios(ss) {
  const sheet = ss.getSheetByName("Testimonios");
  if (!sheet) return [];
  const rows = sheet.getDataRange().getValues();
  const result = [];
  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    if (!r[0]) continue;
    if (r[6] !== true) continue;
    result.push({
      id:       String(r[0]),
      name:     String(r[1]),
      place:    String(r[2]),
      tour:     String(r[3]),
      quote:    String(r[4]),
      photoUrl: String(r[5]),
    });
  }
  return result;
}

// ── doPost — FORM SUBMISSIONS ─────────────────────────────────────────────────

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Solicitudes");
    if (!sheet) throw new Error("Solicitudes sheet not found");

    sheet.appendRow([
      new Date().toISOString(),
      payload.nombre   || "",
      payload.email    || "",
      payload.whatsapp || "",
      payload.tour     || "",
      payload.personas || 1,
      payload.pais     || "",
      "Nuevo",
      "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
