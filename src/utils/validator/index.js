const validator = {
  SerialNumberHex: (val) => {
    const pattern = /^[A-F0-9]{1,4}$/
    if (!pattern.test(val)) {
      return { result: false, message: '请输入正确的十六进制号', type: 'error' };
    }
    return { result: true };
  }
}

export default validator