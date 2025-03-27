function generateWhatsAppLink(phoneNumber, message) {
    // Remove any non-numeric characters from phone number
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    
    // Ensure phone number starts with country code (Brazil = 55)
    const formattedPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Generate WhatsApp API link
    return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
}

module.exports = { generateWhatsAppLink };