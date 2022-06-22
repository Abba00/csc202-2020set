import React from 'react';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
const App = () => {
return (
<div>
<HelloWorld />
<HelloWorld2 name="Pius"/>
<HelloWorld2 />
</div>
);
}
export default App;