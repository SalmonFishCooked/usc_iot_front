const validator = {
  SerialNumberHex: (val) => {
    const pattern = /^[A-F0-9]{1,4}$/
    if (!pattern.test(val)) {
      return { result: false, message: '请输入正确的十六进制号', type: 'error' };
    }
    return { result: true };
  },

  DataLength: (val) => {
    const pattern = /^[A-F0-9]{1,4}$/
    if (val === '0000' || val === '000' || val === '00' || val === '0' || !pattern.test(val)) {
      return { result: false, message: '请输入正确的十六进制号', type: 'error' };
    }
    return { result: true };
  },

  SlaveAddress: (val) => {
    const pattern = /^[A-F0-9]{1,2}$/
    if (!pattern.test(val)) {
      return { result: false, message: '请输入正确的十六进制号', type: 'error' };
    }
    return { result: true };
  },
}

export default validator