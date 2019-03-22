import React from "react";

const ModalContext = React.createContext({
  show: false,
});

export default ModalContext;

export class WrapperModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideModal: this.hideModal,
      show: false,
      showModal: this.showModal
    };
  }

  hideModal = () => {
    this.setState({
      show: false
    });
  };

  showModal = () => {
    this.setState({
      show: true
    });
  };

  render() {
    const { children } = this.props;
    return (
      <ModalContext.Provider value={this.state}>
        {children}
      </ModalContext.Provider>
    );
  }
}
