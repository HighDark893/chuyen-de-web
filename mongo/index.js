import express from 'express';
import cors from "cors";
import {Blog} from "./data-access-object/blog.js";
import {Types} from "mongoose"

const app = express();
console.log("App listen at port 3005");
app.use(express.json());
app.use(cors());
app.listen(3005)

app.get("/allBlog", async (req, resp) => {
    const searchParam = req.query;
    const allBlog = await findAllBlog(searchParam)
    resp.send(allBlog);
});

app.post("/blog", async (req, resp) => {
    const data = req.body;
    saveBlog(data)
})

app.get("/blog/:id", async (req, resp) => {
    const { id } = req.params;
    const blogWithId = await findBlog(id)
    resp.send(blogWithId)
})

app.put("/blog", async (req, resp)=> {
    const data = req.body;
    await updateBlog(data)
})

async function findAllBlog(searchParam) {
    if (Object.keys(searchParam).length === 0) {
        return Blog.find({});
    }
    return Blog.find({ "title": { "$regex": searchParam.title, "$options": "i" }})
}

async function saveBlog(data) {
    const newBlog = new Blog({
        title: data.title,
        story: data.blog
    })
    await newBlog.save();
}

async function findBlog(id){
    return Blog.findById(id);
}

async function updateBlog(blogUpdated) {
    const id = new Types.ObjectId(blogUpdated.id)
    await Blog.updateOne({_id: id}, { $set: { views: String(blogUpdated.newView) } })
}
