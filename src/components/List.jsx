import React from "react";


const List = props => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <div>
      <table>
        <tr>
          <th>Date</th>          
          <th>Race track</th>
        </tr>
        {repos.MRData.RaceTable.Races.map(repo => {
          return (
            <tr>
              <td className="f1Date">{repo.date}</td>
              <td className="f1Location">
                <a href={repo.url} target="_blank">
                  <span>
                    {repo.raceName}
                  </span>
                </a>
              </td>              
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default List;

// <ul>
//   {repos.MRData.RaceTable.Races.map(repo => {
//     return (
//       <li key={repo.round} className="list">
//         <span className="repo-raceName">
//           {repo.raceName}{"\t\t"}
//         </span>
//         <span className="repo-date">
//           {repo.date}
//         </span>
//       </li>
//     );
//   })}
// </ul>

// <ul>
//   <h2 className="list-head">Available Public Repositories</h2>
//   {repos.map(repo => {
//     return (
//       <li key={repo.id} className="list">
//         <span className="repo-text">{repo.name} </span>
//         <span className="repo-description">{repo.description}</span>
//       </li>
//     );
//   })}
// </ul>
