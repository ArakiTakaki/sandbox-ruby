import * as Axios from 'axios';
import React from 'react';
import { hot } from 'react-hot-loader';

interface Props {
	children?: any;
}
interface State {}
@hot(module)
class Index extends React.Component<Props, State> {
	constructor(props: Props) {
    super(props);
  }

  public async componentWillMount() {
    const res = await Axios.default.get('http://localhost:3000/users.json')
    console.log(res);
  }

	public render() {
		return <div>sampleaiueoasdf</div>;
	}
}

export default Index;
