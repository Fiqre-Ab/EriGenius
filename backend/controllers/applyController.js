exports.handleApplication = (req, res) => {
    const { name, age, interest, notes } = req.body;

    if (!name || !age || !interest) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    console.log('New Application:', { name, age, interest, notes });

    res.status(200).json({ message: 'Application received successfully!' });
};
