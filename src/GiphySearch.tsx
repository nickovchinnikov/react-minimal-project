import React, { Component } from 'react'

interface IProps {}

interface IState {
  searchInput: string,
  imgs: any
}

const API_URL = 'http://api.giphy.com/v1/gifs/search?'
const API_KEY = 'fhruhErb7kOixSYUM2EV916C9qVt2wiL'

export class GiphySearch extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      searchInput: '',
      imgs: []
    }
    this.search = this.search.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    console.log('mounted!')
    this.setState({
      searchInput: 'some'
    })
  }

  async componentDidUpdate(prevProps: IProps, prevState: IState) {
    const { searchInput } = this.state

    if (searchInput !== prevState.searchInput && searchInput.length > 3) {
        const result = await this.search(searchInput)
        const { data } = result

        if (data.length > 0) {
          this.setState({
            imgs: data
          })
        }
        console.log('searchInput: ', this.state.searchInput)
        console.log('imgs count: ', this.state.imgs.length)
      }
  }

  async search(searchTerm: string) {
    const url = `${API_URL}q=${searchTerm}&api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    return data
  }

  async handleChange(event: React.FormEvent<HTMLInputElement>) {
    const searchInput = event.currentTarget.value;
    this.setState({
      searchInput
    })
  }

  render() {
    const { searchInput, imgs } = this.state;

    return (
      <div>
        <label>
          Search giphy: 
          <input type="text" value={searchInput} onChange={this.handleChange} />
        </label>
        <h1>Results: </h1>
        <div>
          {imgs.map((item: any) => <div>
            <h3>{item.title} ({item.rating})</h3>
            <img
              src={item.images.fixed_height.url}
              width={item.images.fixed_height.width}
              height={item.images.fixed_height.height}
              alt={item.title}
            />
          </div>)}
        </div>
      </div>
    );
  }
}