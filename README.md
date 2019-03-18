This tiny development hook for react saves you some time when you just want to observe a single state variable or multiple state variables at the same time.


![Kapture 2019-03-18 at 22 31 37](https://user-images.githubusercontent.com/22943912/54565133-b8428000-49cd-11e9-964f-bf2b076533f4.gif)

`npm install --save-dev uselog-hook`

## Usage

```javascript
import useLog from 'uselog-hook';
```

Assume there are three state variables.

```javascript
const [apple, setApple] = useState(0);
const [orange, setOrange] = useState(0);
const [kiwi, setKiwi] = useState(0);
```

```javascript
useLog(apple);

> 0
```

```javascript
useLog([apple, orange]);

> 0
> 0
```

```javascript
useLog({apple, orange});

> {apple: 0, orange: 0}
```

```javascript
useLog({'Num of apples: ': apple});

> {'Num of apples': 0}
```