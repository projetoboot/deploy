// ... existing imports ...
const User = require('../models/user');

// ... existing code ...

// Add this new route
router.get('/check-phone', async (req, res) => {
    try {
        const phone = req.query.phone;
        
        // Validate phone format
        if (!phone || phone.length < 10 || phone.length > 11) {
            return res.status(400).json({ error: 'Invalid phone number format' });
        }

        // Check if phone exists in database
        const existingUser = await User.findOne({ tell: phone });
        
        res.json({
            available: !existingUser
        });
    } catch (error) {
        console.error('Error checking phone availability:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ... rest of your routes ...