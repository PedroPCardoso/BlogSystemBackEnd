# Backend Challenge

The project is a simple challenge to test your skills in building APIs using the Node.js framework.

### Submission

- [ ] Read the description, requirements, and the others instructions
- [ ] Clone the repository
- [ ] Submit your challenge as a pull request

### What to do

- Create users to relationships with the posts (CRUD).
- Create a simple API to manage the system of posts (CRUD).
- Create comments with replies to using in the posts (CRUD).
- The API for Listing Posts needs a filter by title, tags, and user.

---

**The users API should allow to:**

| Method | Name | Route |
| ------ | ------ | ------ |
| POST | Create User | /api/users |
| GET | Get User By ID | /api/users/:id |
| PUT | Edit User | /api/users/:id |
| DELETE | Delete User | /api/users/:id |

**The user must have the following fields:**

| Field | Type |
| ------ | ------ |
| id | number |
| name | string |
| email | string |
| createdAt | date |
| updatedAt | date |

---

**The posts API should allow to:**

| Method | Name | Route |
| ------ | ------ | ------ |
| POST | Create Post | /api/posts |
| GET | Listing Posts | /api/posts |
| GET | Getting Comments of Post | /api/posts/:id/comments |
| GET | Get Post By ID | /api/posts/:id |
| PUT | Edit Post | /api/posts/:id |
| DELETE | Delete Post | /api/posts/:id |

**The post must have the following fields:**

| Field | Type |
| ------ | ------ |
| id | UUID |
| userId | number |
| title | string |
| body | string |
| tags | string[] |
| comments | string[] |
| createdAt | date |
| updatedAt | date |

**Filter on listing posts:**

- [ ]  GET `/api/posts?title=lorem ipsum`
- [ ]  GET `/api/posts?tags[]=art&tags[]=music`
- [ ]  GET `/api/posts?userId=10`
- [ ]  GET `/api/posts?tags[]=music&userId=10`

---

**The comments API should allow to:**

| Method | Name | Route |
| ------ | ------ | ------ |
| POST | Create comment | /api/comments/:postId |
| POST | Create a replay | /api/comments/:postId/:parentId |
| GET | Get Comment By ID | /api/comments/:id |
| PUT | Edit Comment | /api/comments/:id |
| DELETE | Delete Comment | /api/comments/:id |

**The user must have the following fields:**

| Field | Type |
| ------ | ------ |
| id | UUID |
| userId | number |
| postId | UUID |
| body | string |
| parentId | UUID |
| createdAt | date |
| updatedAt | date |

---

### Example of a post object in the response

```json
{
  "id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  "user": {
    "id": 10,
    "name": "Clementina DuBuque",
    "avatarUrl": "https://secure.gravatar.com/avatar/27db1cf6a1z439e01ecf161533a4fcd9?s=50&d=mm&r=g"
  },
  "title": "Magnam facilis autem",
  "body": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "tags": [
    "Music",
    "Spotify"
  ],
  "createdAt": "1970-01-01T00:00:00.000Z",
  "updatedAt": "1970-01-01T00:00:00.000Z",
  "comments": [
    {
      "id": "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
      "user": {
        "id": 1,
        "name": "John Doe",
        "avatarUrl": "https://secure.gravatar.com/avatar/27db1cf6a1z439e01ecf161533a4fcd9?s=50&d=mm&r=g"
      },
      "body": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "createdAt": "1970-01-01T00:00:00.000Z",
      "updatedAt": "1970-01-01T00:00:00.000Z",
      "replies": [
        {
          "id": "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b",
          "user": {
            "id": 2,
            "name": "Mary Doe",
            "avatarUrl": "https://secure.gravatar.com/avatar/27db1cf6a1z439e01ecf161533a4fcd9?s=50&d=mm&r=g"
          },
          "body": "laudantium enim quasi est quidem magnam voluptate ipsam",
          "createdAt": "1970-01-01T00:00:00.000Z",
          "updatedAt": "1970-01-01T00:00:00.000Z"
        }
      ]
    }
  ]
}

```

### Requirements

- [ ] All API responses must be in JSON format.
- [ ] Add pagination on the API for the listing of the posts
- [ ] Provide the unit testing for all routes using Mocha and Chai or your preferred testing framework.
- [ ] Provide documentation for all routes, we preferer using Swagger API, but you can using README for documentation.
- [ ] Provide a README file with usage instructions (how to the runs, considerations, etc...).
- [ ] Use naming written as camelCase by convention.

#### - **The folders structures of the project should be following the example below.**

```sh
├── src
│   ├── controllers
│   │   ├── comments
│   │   ├── posts
│   │   └── users
│   ├── helpers
│   │   └── utils.js
│   ├── models
│   │   ├── comment.js
│   │   ├── post.js
│   │   └── user.js
│   ├── routes
│   │   └── api
│   │       ├── comments.js
│   │       ├── index.js
│   │       ├── posts.js
│   │       └── users.js
│   └── app.js
├── test
│   ├── comments
│   ├── posts
│   └── users
├── .editorconfig
├── .gitignore
├── package.json
└── readme.md
```

### Data Persistence

- [ ] Use Postgress as data storage
  - [ ] Use the lib `sequelize` to connect to the database

### Evaluation

- [ ] Architecture
- [ ] Automated tests
- [ ] Functionalities of the APIs
- [ ] Programming good practices
- [ ] Project organization
- [ ] Structure componentization
- [ ] Clean code with camelcase pattern

### Bonus Level Up

- [ ] Authenticated the routes using JWT
- [ ] Process and validate the data that the API receives before creating the post
- [ ] Using Swagger API documentation
- [ ] Use Dockerfile to run the project
