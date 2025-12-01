# Meme Microservice

A simple Node.js microservice that fetches wholesome memes from the Meme API and returns them as JSON. It also logs the meme URL in the terminal and can optionally render the meme as ASCII art.

---

## 🚀 Features

* Fetches a random wholesome meme
* Returns JSON via `GET /meme`
* CORS enabled
* Logs the meme URL to the console
* Optional ASCII-art meme preview in the terminal
* Lightweight and perfect for microservice architectures

---

## 📁 Project Structure

```
meme-service/
├── meme-service.js
├── package.json
└── README.md
```

---

## 🛠️ Installation

1. Clone the repository:

   ```sh
   ```

git clone [https://github.com/YOUR_USERNAME/meme-service.git](https://github.com/YOUR_USERNAME/meme-service.git)
cd meme-service

````

2. Install dependencies:
   ```sh
npm install
````

3. Ensure ES Modules are enabled in **package.json**:

   ```json
   ```

{
"type": "module"
}

````

---

## ▶️ Running the Service
Start the microservice:
```sh
node meme-service.js
````

You should see:

```
✅ Meme Service running on port 5001...
```

---

## 🧪 Usage

Call the API endpoint:

```
http://localhost:5001/meme
```

Example response:

```json
{
  "success": true,
  "url": "https://i.redd.it/example.jpg"
}
```

Console output:

```
🔥 Meme fetched: https://i.redd.it/example.jpg
```

---

## 🖼️ Optional: ASCII Meme Output

Install ASCII rendering support:

```sh
npm install image-to-ascii
```

The terminal can then print the meme in ASCII form.

---

## 🌐 API Endpoint

### **GET /meme**

Returns a wholesome meme along with metadata if expanded.

---

## 🐳 Docker (optional)

If you'd like a Dockerfile or docker-compose setup, just ask!

---

## 📄 License

MIT License — free to use and modify.
