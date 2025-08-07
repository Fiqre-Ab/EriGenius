exports.handleApplication = (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please fill in all required fields.' });
    }

    console.log('📨 New contact message:', { name, email, message });


    res.status(200).json({
        message: "Thanks for reaching out! We'll get back to you soon."});
};




