var express = require('express');
const isAuthenticatedUser =  require('../middlewares/auth')
var { getBlogs, add, update, myBlogs, deleteBlog, singleBlog } = require('../controllers/blog-controller')

const blogRouter = express.Router();

blogRouter.get("/",isAuthenticatedUser, getBlogs);
blogRouter.post("/add",isAuthenticatedUser, add);
blogRouter.put("/update/:id",isAuthenticatedUser, update);
blogRouter.get("/:id",isAuthenticatedUser, myBlogs);
blogRouter.delete("/:id",isAuthenticatedUser, deleteBlog);
blogRouter.get("/single/:id",isAuthenticatedUser, singleBlog);

module.exports = blogRouter;