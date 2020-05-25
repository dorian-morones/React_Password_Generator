# React Password Generator

## Overview
React Module that generates a strong password ready to use in any project, it has already TypeScript support.

## Usage

### Installation
```
npm install react-password-generator
```

### Import 
``` js
import { PasswordGenerator } from "react-password-generator"
```

### Component Props

| Name     | Type     | Description |
|----------|----------|----------|
| ButtonValue | string     | Define the text to be displayed on the button |
| letters     | number     | Define the password letters number |
| type        | number     | Define the password type |


### Password Types
- **1:** [Numeric]
- **2:** [Text]
- **3:** [Alphanumeric]
- **4:** [Mix - Letters, numbers and symbols]

### Live component
``` js
<PasswordGenerator ButtonValue={'New Password'} letters={6} type={4} />
```
