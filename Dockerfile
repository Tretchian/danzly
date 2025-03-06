# Используем официальный образ Node.js
FROM node:20

# Задаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь код проекта
COPY . .

# Собираем TypeScript (если используем Nest CLI)
RUN npm run build

# Открываем порт, который использует приложение (например, 3000)
EXPOSE 7777

# Команда для запуска сервера
CMD ["npm", "run", "start:dev"]
