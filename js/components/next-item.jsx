/**
 * @jsx React.DOM
 */
var NextItem = React.createClass({
  render: function() {
    var structure;

    switch (this.props.type) {
    case undefined:
      structure = <table className="next-none" key="none" />
      break;

    case C.CellType.None:
      structure = <table className="next-none" key="none" />
      break;

    case C.CellType.I:
      structure =
        <table className="next-i" key="i">
          <tr className="next-line">
            <td className="next-cell type-i" />
            <td className="next-cell type-i" />
            <td className="next-cell type-i" />
            <td className="next-cell type-i" />
          </tr>
        </table>
      break;

    case C.CellType.J:
      structure =
        <table className="next-j" key="j">
          <tr className="next-line">
            <td className="next-cell type-j" />
            <td className="next-cell" />
            <td className="next-cell" />
          </tr>
          <tr className="next-line">
            <td className="next-cell type-j" />
            <td className="next-cell type-j" />
            <td className="next-cell type-j" />
          </tr>
        </table>
      break;

    case C.CellType.L:
      structure =
        <table className="next-l" key="l">
          <tr className="next-line">
            <td className="next-cell" />
            <td className="next-cell" />
            <td className="next-cell type-l" />
          </tr>
          <tr className="next-line">
            <td className="next-cell type-l" />
            <td className="next-cell type-l" />
            <td className="next-cell type-l" />
          </tr>
        </table>
      break;

    case C.CellType.O:
      structure =
        <table className="next-o" key="o">
          <tr className="next-line">
            <td className="next-cell type-o" />
            <td className="next-cell type-o" />
          </tr>
          <tr className="next-line">
            <td className="next-cell type-o" />
            <td className="next-cell type-o" />
          </tr>
        </table>
      break;

    case C.CellType.S:
      structure =
        <table className="next-s" key="s">
          <tr className="next-line">
            <td className="next-cell" />
            <td className="next-cell type-s" />
            <td className="next-cell type-s" />
          </tr>
          <tr className="next-line">
            <td className="next-cell type-s" />
            <td className="next-cell type-s" />
            <td className="next-cell" />
          </tr>
        </table>
      break;

    case C.CellType.T:
      structure =
        <table className="next-t" key="t">
          <tr className="next-line">
            <td className="next-cell" />
            <td className="next-cell type-t" />
            <td className="next-cell" />
          </tr>
          <tr className="next-line">
            <td className="next-cell type-t" />
            <td className="next-cell type-t" />
            <td className="next-cell type-t" />
          </tr>
        </table>
      break;

    case C.CellType.Z:
      structure =
        <table className="next-z" key="z">
          <tr className="next-line">
            <td className="next-cell type-z" />
            <td className="next-cell type-z" />
            <td className="next-cell" />
          </tr>
          <tr className="next-line">
            <td className="next-cell" />
            <td className="next-cell type-z" />
            <td className="next-cell type-z" />
          </tr>
        </table>
      break;

    default:
      throw new Error('invalid type(' + this.props.type + ')');
    }

    return <div className={"next" + (this.props.fixed ? " fixed" : "")}>
             {structure}
           </div>
  }
});
