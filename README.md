#### absolute paths (not related to testing)

  .env

  ```
    NODE_PATH=src/
  ```


#### test setup 

  npm install --save enzyme enzyme-adapter-react-16 axios redux-promise moxios

  setupTests.js (goes in src/frontend folder)

  ```
    import Enzyme from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';

    Enzyme.configure({ adapter: new Adapter() });
  ```


#### examples

docs

  https://airbnb.io/enzyme/

  https://github.com/axios/moxios





