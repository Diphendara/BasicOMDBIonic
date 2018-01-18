# BasicOMDBIonic

## Installation

**Prerequisites**
```bash
$ npm install -g cordova ionic
```

First thing you should do is `npm install`.

Then you should create a 'key.ts' file in the root directory of the project with
```bash
export default "XXXXXX";
```
Where XXXX is your key of omdb api, you can ask for one here --> 'https://www.omdbapi.com/'

For launching you can do
```bash
$ ionic serve
```
If you want to see the app as a desktop webapp

or 

```bash
$ ionic serve -l
```
This will open the app wrapped in each platform mode (android, ios and windows phone).

If you want to build the app for your mobile phone:
```bash
$ ionic platform add android
$ ionic build android
$ ionic run android
```
