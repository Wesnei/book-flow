import Joi from "joi";

const bookSchema = Joi.object({
    title: Joi.string().min(3).required(),
    author: Joi.string().min(3).required(),
    genre: Joi.string().min(3).optional(),
    published_year: Joi.number().integer().min(0).required()
});

const validateBook = (req, res, next) => {
    const { error } = bookSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 400,
            message: error.details[0].message
        });
    }
    next();
}

export { validateBook };
