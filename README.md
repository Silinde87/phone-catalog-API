# The Phone Catalog - API

This repository is the API of The Phone Catalog

## Before start

```
yarn install
```

-   Create `.env` file at root directory. It must include the following variables:

```
DBURL=mongodb+srv://admin:<password>@cluster0.ij2vc.mongodb.net/phoneCatalaog?retryWrites=true&w=majority
PORT=6000
```

Once everything is set:

```
yarn start
```

# Server / Backend

## Models

Phone model

```javascript
{
  id: { type: objectId, required: true, unique: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true, minimum: 0 },
  imageFileName: { type: String, required: true },
  screen: { type: String, required: true },
  processor: { type: String, required: true },
  ram: { type: String, required: true },
  camera: { type: String, required: true },
  battery: { type: String, required: true },
  storage: { type: String, required: true },
  screenResolution: { type: String, required: true },
}
```

## API Endpoints (backend routes)

| HTTP Method | URL           | Request Body | Success status | Error Status | Description        |
| ----------- | ------------- | ------------ | -------------- | ------------ | ------------------ |
| GET         | `/api/phones` | { }          | 200            | 404          | Get all the phones |
| POST        | `/api/phones` |{ Phone model }| 200           |  400 / 500   | Creates a phone    |
| PUT       |`/api/phones/:id`|{ Phone model }| 200           |    400 / 404 | Updates a phone based on his id |
| DELETE    |`/api/phones/:id/delete`|       | 200            |      404     | Deletes a phone based on his id|
