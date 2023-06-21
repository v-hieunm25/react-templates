
# React Templates

## Setting

### Requirement
- Nodejs >=16, Yarn, VSCode, Git
- Extension [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) và [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) trên VSCode để format code & check code convetion.

### Run locally
Clone the project

```bash
  git clone https://gitlab.com/tempo-software/tempo-base/react-templates
```

Go to the project directory

```bash
  cd react-templates
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn dev
```
Then project live on http://localhost:3000

## Preview production version in local
```bash
  yarn build
```
```bash
  yarn preview
```
Then production version will live on http://localhost:8000

## Commit
Trước khi commit code cần chạy lệnh
```bash
  yarn lint
```
để check & fix 1 phần code convention error. Đảm bảo không còn code convention error trước khi push code, nếu không sẽ build fail.

## Note
- ENV_VAR cần bắt đầu với VITE_
- Use ENV_VAR bằng 
```bash
  import.meta.env.VITE_...
```
- Vì package-lock.json & yarn.lock không được push lên remote repo nên khi muốn add 1 lib mới cần chỉ rõ chính xác phiên bản, nên bỏ ~ hoặc ^ trước số phiên bản ở file package.json.