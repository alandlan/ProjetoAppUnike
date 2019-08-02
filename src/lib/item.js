export default class Item {
  data;
  constructor(data = []) {
    this.data = data;
  }
  setActive(item) {
    this.data = this.data.map(d => {
      d.Servicos = d.Servicos.map(service => {
        if (service.Id === item.Id) {
          service.active = !service.active;
        }
        return service;
      });
      return d;
    });
  }
  setActives(items) {
    this.data = this.data.map(d => {
      d.Servicos = d.Servicos.map(service => {
        service.active = items.contains(service.Id);
        return service;
      });
      return d;
    });
  }
  get() {
    return this.data;
  }
  set(data) {
    data = data.map(d => {
      d.Servicos.map(service => {
        service.active = false;
        return service;
      });
      return d;
    });

    this.data = data;
  }
  getActive() {
    this.data.map(d => d.active);
  }
}
