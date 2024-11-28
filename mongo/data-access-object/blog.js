import connection from "../db-config.js";

const blogSchema = new connection.Schema(
    {
        author: {type: String, required: false},
        title: {type: String, required: true},
        subtitle: {type: String},
        date: {type: String, required: false},
        views: {type: String, required: false},
        comments: {type: String, required: false },
        story: { type: String, required: true },
        channel: {type: String, required: false},
    },
    {timestamps: true}
);

export const Blog = connection.model("Blog", blogSchema);
