const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function create(name, email) {
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  console.log(user);
}
// create("prisma repo", "prisma.io@prisma");

async function list() {
  const users = await prisma.user.findMany({});
  console.log(users);
}
// list();

async function search(searchWord) {
  const result = await prisma.user.findMany({
    where: {
      OR: [
        {
          name: {
            contains: searchWord,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: searchWord,
            mode: "insensitive",
          },
        },
      ],
    },
  });
  console.log(result);
}

search("repo");
