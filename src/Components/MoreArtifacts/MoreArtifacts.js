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
              <a href="/images/dischargecert.webp" target="_blank">
              <img  src="/images/dischargecert.webp" />
              </a>
            </td>
            <td>Thomas O'Connors Discharge Certificate</td>
          </tr>
          <tr>
            <td>
              <a href="/images/dischargepaper.webp" target="_blank">
              <img  src="/images/dischargepaper.webp" />
              </a>
            </td>
            <td>Thomas O'Connors Discharge Papers</td>
          </tr>
          <tr>
            <td>
              <a href="/images/grandmagrandpa.webp" target="_blank">
              <img  src="/images/grandmagrandpa.webp" />
              </a>
            </td>
            <td>Cathleen and Tom on their Wedding Day</td>
          </tr>
          <tr>
            <td>
              <a href="/images/queenelizabetharticle.pdf" target="_blank">
              <img  src="/images/returnship1.webp" />
              </a>
            </td>
            <td>New York Times Article Detailing the Return on the Queen Mary</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default MoreArtifacts;
