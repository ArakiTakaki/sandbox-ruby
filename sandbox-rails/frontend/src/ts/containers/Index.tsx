import React from 'react';
import { hot } from 'react-hot-loader';

const styles = require('./Index.sass');

interface Props{
  children?:any
}
interface State{}
@hot(module)
class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  public render() {
    return (
      <div>
        sampleaiueoasdf
      </div>
    );
  }
}

export default Index;