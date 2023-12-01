import "./MoreArtifacts.scss";

function MoreArtifacts() {
  return (
    <section>
      <table className="thumbnail-table">
        <thead>
          <tr>
            <th>Artifact</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img  src="/images/dischargecert.webp" />
            </td>
            <td>Thomas O'Connors Discharge Certificate</td>
          </tr>
          <tr>
            <td>
              <img  src="/images/dischargepaper.webp" />
            </td>
            <td>Thomas O'Connors Discharge Papers</td>
          </tr>
          <tr>
            <td>
              <img  src="/images/grandmagrandpa.webp" />
            </td>
            <td>Cathleen and Tom on their Wedding Day</td>
          </tr>
          <tr>
            <td>
              <img  src="/images/returnship1.webp" />
            </td>
            <td>New York Times Article Detailing the Return on the Queen Mary</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default MoreArtifacts;
