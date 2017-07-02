import Component form '../base/Component';
export default class Image extends Component {
    construct({targetObject,url,rect}) {
        super({targetObject});
        this.url = url;
        this.rect = rect;
    }
}