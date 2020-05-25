# React_Password_Generator

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
| ButtonValue | string     | The Text that will be displayed in the button |
| letters     | number     | Define the passoworn letters number |
| type        | number     | Define the password type |


### Password Types
- **1:** [Numeric]
- **2:** [Text]
- **3:** [Alphanumeric]
- **4:** [Mix - Letters, numbers and symbols]

### Use components
``` js
<PasswordGenerator ButtonValue={'New Password'} letters={6} type={4} />
```
