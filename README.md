# โ ๏ธ THIS PROJECT HAVE BEEN DISCONTINUED โ ๏ธ

**In order to provide a better user experience, this project has been discontinued. This project is no longer maintained and will be archived soon. But not everything is bad. Menhera Picasso has a substitute. Visit [Menhera Van GOgh](https://github.com/MenheraBot/MenheraVanGOgh), It is pretty the same thing, but is made in GoLang. Thank you.**

<p align="center">
    <img src="https://i.imgur.com/g9MuGLw.png" alt="Logo" width="160" height="160">

  <h3 align="center">๐ <b>Menhera Picasso</b> ๐</h3>

  <p align="center">
    An Application to manipulate images for MenheraBot.
    <br />
    <a href="https://github.com/MenheraBot/MenheraBot"><strong>MenheraBot ยป</strong></a>
    <br />
    <br />
  </p>
</p>

## ๐จโ๐ป | Contributing

You may contribute to this project by opening an issue or creating a pull request on GitHub. If you want to add a new asset, you need to follow this document, and send the asset to [MenheraBot's Suppport Server](https://discord.com/invite/fZMdQbA).

## ๐ฅ | Running

To run MenheraPicasso, you need to have [Docker](https://www.docker.com/) in your machine. You have two options of installation, follow the one that applies to you.

### ๐ฎ | Building the Image

> If you want to build the image yourself, you can do it by following these steps:

1. ๐งน Clone the repository

```bash
git clone https://github.com/MenheraBot/MenheraPicasso.git
```

2. ๐ป Building the Image

```bash
docker build . --tag picasso
```

3. ๐โโ๏ธ Running a Container

```bash
docker run --name PicassoServer -p 2080:2080 -e "API_TOKEN=" -e "MENHERA_AGENT=" --restart unless-stopped -d -t picasso
```

> Obs: the `API_TOKEN` and `MENHERA_AGENT` are just for authentication purpuses. The `restart` policy used is because, well, no one wants a server down!

Now we can connect to WS or HTTP to 2080 port!

### ๐ | Downloading the Image

> If you don't really want all the source code, and just want to execute the bot, you can just donwload the image from the Container Registry.

1. ๐ฅ Download the image

```bash
docker pull ghcr.io/menherabot/picasso:latest
```

> You need to be [logged in](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry)

2. ๐โโ๏ธ Running a Container

```bash
docker run --name PicassoServer -p 2080:2080 -e "API_TOKEN=ReplaceWithToken" -e "MENHERA_AGENT=Agent??Yes!Agent" --restart unless-stopped -d -t ghcr.io/menherabot/picasso:latest
```

> Obs: the `API_TOKEN` and `MENHERA_AGENT` are just for authentication purpuses. The `restart` policy used is because, well, no one wants a server down!

Creeper? Awww maan. Picasso is on!

## ๐จ | Made With

- [Node Canvas](https://www.npmjs.com/package/canvas)
- [Express](https://expressjs.com/pt-br/)
- [WS](https://www.npmjs.com/package/ws)

## โ๏ธ | License

Distributed under the MIT License. See `LICENSE` for more information.

## ๐ง | Contact

Discord: **Luxanna#5757**

Twitter: **[@Luxanna_Dev](https://twitter.com/Luxanna_Dev)**

---

MenheraBot was made with โค๏ธ by Luxanna.
