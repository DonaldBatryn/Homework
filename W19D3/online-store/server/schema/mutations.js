const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;
const mongoose = require("mongoose");
const CategoryType = require('./types/category_type');
const Category = require('../../models/Category');
const ProductType = require('./types/product_type');
const Product = require('../../models/Product');
const User = require("../../models/User");
const UserType = require("./types/user_type");
const AuthService = require("../services/auth");

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        newCategory: {
            type: CategoryType,
            args: {
                name: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                return new Category(args).save();
            }
        },
		deleteCategory: {
            type: CategoryType,
            args: {
                _id: { type: GraphQLID }
            },
            resolve(parentValue, { _id }) {
                return Category.findByIdAndRemove(_id);
            }
        },
		newProduct: {
			type: ProductType,
			args: {
				name: { type: GraphQLString },
				category: { type: GraphQLID },
				description: { type: GraphQLString },
				weight: { type: GraphQLInt }
			},
			resolve(parentValue, args) {
				return new Product(args).save().then(product => {
                    return Category.findById(args.category).then(category => {
                        category.products.push(product);
                        return category.save().then(category => product)
                    })
                })
			}
		},
		deleteProduct: {
			type: ProductType,
			args: {
				_id: { type: GraphQLID }
			},
			resolve(parentValue, { _id }) {
				return Product.findByIdAndRemove(_id);
			}
        },
        updateProductCategory: {
            type: ProductType,
            args: {
                productId: { type: GraphQLID },
                categoryId: { type: GraphQLID }
            },
            resolve(parentValue, { productId, categoryId }) {
                return Product.updateProductCategory(productId, categoryId);
            }

        },
        register: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(_, args) {
                return AuthService.register(args);
            }
        },
        login: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(_, args) {
                return AuthService.login(args);
            }
        },
        verifyUser: {
            type: UserType,
            args: {
                token: { type: GraphQLString }
            },
            resolve(_, args) {
                return AuthService.verifyUser(args);
            }
        }
	}
});

module.exports = mutation;