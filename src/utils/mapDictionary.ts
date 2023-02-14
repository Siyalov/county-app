const mapDictionary = (obj: any):any[] => {
  return Object.entries(obj).map(([key, value]) => {
    return value;
  });

};

export default mapDictionary;