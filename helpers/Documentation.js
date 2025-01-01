import {tags} from "../Docs/Tags.js";
import { user_docs } from "../Docs/user_doc.js";

export const swaggerDefinition = {
    swaggerDefinition: {
        swagger: '2.0',
        info: {
            title: 'Api V.1',
            version: '1.0.0',
            description: 'REST Api Documentation'
        },
        servers: [
            {
                url: "http://localhost:3001",
                description: 'Local server',
            },
            {
                url: "http://localhost:3001",
                description: 'Local productions',
            },
        ],
        tags:tags,
        paths: {
            ...user_docs
        }
    },
    apis: ['./routes/*.js'], // pastikan path ini mengarah ke file yang sesuai
};