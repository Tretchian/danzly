# Запуск API с помощью Docker

## Требования  
Перед запуском убедитесь, что у вас установлен [Docker](https://www.docker.com/) и [Docker Compose](https://docs.docker.com/compose/).  

Если Docker не установлен:  
- Установите его, следуя [официальной инструкции](https://docs.docker.com/get-docker/).  

## Проверка и запуск Docker  

Перед запуском убедитесь, что Docker работает. Выполните команду:  
docker info
  
Если в ответе отображается информация о Docker, значит, он запущен.  

Если Docker не запущен, запустите его вручную:  
- Windows: Откройте Docker Desktop.  
- macOS: Откройте Docker Desktop.  
- Linux: выполните команду:  
  
  sudo systemctl start docker
  

## Установка и запуск  

1. Клонируйте или распакуйте архив с проектом.  
2. Перейдите в корневую директорию проекта (где находятся файлы .env.docker и docker-compose.yml).  
3. Запустите контейнер с API командой:  
   
   docker compose up -d
   
   
## Проверка работоспособности  

1. Убедитесь, что контейнер запущен:  
   
   docker ps
   
   Должен отобразиться контейнер с вашим API.  

2. Откройте в браузере [http://localhost:7777/api](http://localhost:7777/api) или отправьте запрос с помощью curl/Postman:  
   
   curl http://localhost:7777/api
   
   Если API отвечает, значит всё работает корректно.  

## Остановка контейнера  
Для остановки и удаления контейнера используйте:  
docker compose down