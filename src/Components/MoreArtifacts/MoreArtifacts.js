import "./MoreArtifacts.scss";

function MoreArtifacts() {
  return (
    <section>
      <h4>Click on an artifact to see full size version in a new tab</h4>
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
                <img src="/images/dischargecert.webp" />
              </a>
            </td>
            <td>Thomas O'Connor's Discharge Certificate</td>
          </tr>
          <tr>
            <td>
              <a href="/images/dischargepaper.webp" target="_blank">
                <img src="/images/dischargepaper.webp" />
              </a>
            </td>
            <td>Thomas O'Connor's Discharge Papers</td>
          </tr>
          <tr>
            <td>
              <a href="/images/grandmagrandpa.webp" target="_blank">
                <img src="/images/grandmagrandpa.webp" />
              </a>
            </td>
            <td>Catherine and Tom on their Wedding Day</td>
          </tr>
          <tr>
            <td>
              <a href="/images/queenelizabetharticle.pdf" target="_blank">
                <img src="/images/returnship1.webp" />
              </a>
            </td>
            <td>
              New York Times Article Detailing the Return on the Queen Elizabeth
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default MoreArtifacts;
