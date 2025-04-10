import TokenVerify from "../middleware/TokenVerify.js";
import News from "../models/News.js";
import dotenv from "dotenv";

dotenv.config();


class NewsController {

    constructor(){
        this.store = this.store.bind(this);
        this.getUserId = this.getUserId.bind(this);
    }

    async index(req, res) {
        try {
            let newsData = await News.find({}).populate('userId','name').populate('categoryId')
            // let newsData = await News.aggregate([
            //     {
            //         $lookup: {
            //             from: "users",
            //             localField: "userId",
            //             foreignField: "_id",
            //             as: "user",
            //         },
            //     },
            //     {
            //         $lookup: {
            //             from: "categories",
            //             localField: "categoryId",
            //             foreignField: "_id",
            //             as: "category",
            //         },
            //     }
            // ]);
            newsData = newsData.map((news) => {
                if (news.image) {
                    news.image = process.env.PUBLIC_URL + '/news/' + news.image;
                }else{
                    news.image = `${process.env.PUBLIC_URL}/icons/notfound.png`;
                }
                return news;
            })
            return res.json({ news: newsData }).status(200);
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    }

    async show(req, res) {
       
    }

    async getUserId(token){
        let getResponse = await TokenVerify.verify(token);
        return getResponse.id;
    }
    async store(req, res) {
      let userId= await this.getUserId(req.body.userToken);
        try {
            let total = await News.find({ slug: req.body.slug }).countDocuments();
            if (total > 0) {
                return res.status(400).json({ slug: 'Slug already exists' });
            } else {
                let image ="";
                if(req.file){
                    image = req.file.filename;
                }
                req.body.userId = userId;
                await News.create({ ...req.body,image:image });
                return res.json({ message: 'News created',success:true });
            }
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    }

    update(req, res) {
        return res.json({ message: 'User updated' });
    }

    delete(req, res) {
        return res.json({ message: 'User deleted' });
    }
}

export default NewsController;