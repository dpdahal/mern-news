import Category from "../models/Category.js";


class CategoryController {

    async index(req, res) {
        try {
            let catData = await Category.find({});
            return res.json({ category: catData }).status(200);
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    }

    async show(req, res) {
        try {
            let id = req.params.id;
            let category = await Category.findById(id);
            if (category) {
                return res.json({ category }).status(200);
            } else {
                return res.status(404).json({ message: 'User not found' });
            }
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    }
    async store(req, res) {
        try {
            let total = await Category.find({ slug: req.body.slug }).countDocuments();
            console.log(total);
            if (total > 0) {
                return res.status(400).json({ slug: 'Slug already exists' });
            } else {
                await Category.create({ ...req.body});
                return res.json({ message: 'Category created' });
            }
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    }

    update(req, res) {
        return res.json({ message: 'Test updated' });
    }

    delete(req, res) {
        return res.json({ message: 'TEst deleted' });
    }
}

export default CategoryController;