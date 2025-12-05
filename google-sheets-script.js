// Google Apps Script to handle form submissions and add them to a Google Sheet
// Deploy this script as a web app and use the URL in your environment variables

// Replace with your actual spreadsheet ID from the URL of your Google Sheet
const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID"
const SHEET_NAME = "Contatos"

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents)

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.company) {
      return ContentService.createTextOutput(
        JSON.stringify({
          status: "error",
          message: "Missing required fields",
        }),
      ).setMimeType(ContentService.MimeType.JSON)
    }

    // Format date for better readability in the spreadsheet
    const formattedDate = new Date(data.date).toLocaleString("pt-BR")

    // Prepare row data
    const rowData = [
      data.name,
      data.email,
      data.phone,
      data.company,
      data.message || "",
      data.product || "Não especificado",
      formattedDate,
    ]

    // Get the spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID)
    let sheet = spreadsheet.getSheetByName(SHEET_NAME)

    // Create the sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME)

      // Add headers
      sheet.appendRow(["Nome", "Email", "Telefone", "Empresa", "Mensagem", "Produto", "Data"])
    }

    // Append the new row
    sheet.appendRow(rowData)

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Data added to spreadsheet successfully",
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    // Log the error and return error response
    console.error("Error processing form submission: " + error.message)
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

function doGet() {
  // Return a simple HTML page for testing
  return HtmlService.createHtmlOutput(
    "<h1>LJ Santos Form Submission API</h1>" +
      "<p>This is a web service endpoint for form submissions. Please use POST method to submit data.</p>",
  )
}
