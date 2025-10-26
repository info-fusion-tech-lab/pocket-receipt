/**
 * Extract expense data from OCR text
 * FIXED: Enhanced regex patterns for Indian currency formats
 * Handles: ₹, Rs, Rs., INR, with/without spaces, with/without trailing /-
 */

export const extractDataFromText = (text) => {
  if (!text || text.trim().length === 0) {
    return {
      amount: 0,
      date: new Date().toLocaleDateString('en-IN'),
      shop: 'Unknown',
      rawText: text
    };
  }

  // FIXED: Enhanced amount regex to handle /-
  // Matches: ₹1000, Rs 1,234.50, Rs. 500/-, INR 1000/-
  const amountRegex = /(?:₹|Rs\.?|INR)\s*([\d,]+(?:\.\d{1,2})?)\/?-?|([\d,]+(?:\.\d{1,2})?)\s*(?:₹|Rs\.?|INR)\/?-?/gi;
  
  const amounts = [];
  let match;
  
  while ((match = amountRegex.exec(text)) !== null) {
    const amtStr = (match[1] || match[2]).replace(/,/g, '').replace(/\/-?$/, '');
    const amt = parseFloat(amtStr);
    if (!isNaN(amt) && amt > 0) {
      amounts.push(amt);
    }
  }

  // FIXED: Enhanced date regex for multiple formats
  // Matches: DD/MM/YYYY, DD-MM-YYYY, DD MMM YYYY, DD Month YYYY
  const datePatterns = [
    /(\d{1,2}[-/]\d{1,2}[-/]\d{2,4})/g,
    /(\d{1,2}\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{2,4})/gi,
    /(\d{1,2}\s+(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{2,4})/gi
  ];

  let extractedDate = null;
  for (const pattern of datePatterns) {
    const dateMatch = text.match(pattern);
    if (dateMatch && dateMatch.length > 0) {
      extractedDate = dateMatch[0];
      break;
    }
  }

  // FIXED: Better shop name extraction
  // Remove common OCR noise words and take meaningful first line
  const lines = text.split('\n')
    .map(l => l.trim())
    .filter(l => l.length > 2)
    .filter(l => !/(receipt|invoice|bill|tax|total|subtotal)/i.test(l));
  
  let shopName = 'Unknown';
  if (lines.length > 0) {
    shopName = lines[0].substring(0, 40); // Limit to 40 chars
  }

  return {
    amount: amounts.length > 0 ? Math.max(...amounts) : 0,
    date: extractedDate || new Date().toLocaleDateString('en-IN'),
    shop: shopName.trim(),
    rawText: text
  };
};

/**
 * Format currency for display
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2
  }).format(amount);
};

/**
 * Validate image file
 */
export const validateImageFile = (file) => {
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  const maxSize = 5 * 1024 * 1024; // 5MB

  if (!validTypes.includes(file.type)) {
    throw new Error('Sirf JPG, PNG ya WEBP file upload karo!');
  }

  if (file.size > maxSize) {
    throw new Error('File size 5MB se kam honi chahiye!');
  }

  return true;
};
