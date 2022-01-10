import react, { useEffect } from "react";
import "./main.css";

export default function Projects() {
    const [projects, setProjects] = react.useState([]);
    const [error, setError] = react.useState(null);
    const [loading, setLoading] = react.useState(true);

    useEffect(() => {
        window
            .fetch(`https://api.github.com/users/alighamdan/repos`)
            .then((e) => e.json())
            .then((repos) => {
                setProjects(repos);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return (
        !loading && (
            <div>
                <div id="mainNav">
                    <img
                        class="main-avatar"
                        src="https://cdn.discordapp.com/avatars/600031207782350858/1a6937eb1250c08e3885fcf842bc8326.png?size=4096"
                    />
                    <a href="/projects">
                        <button className="navbuttons">Projects</button>
                    </a>
                    <a href="/">
                        <button className="navbuttons">Home</button>
                    </a>
                </div>
                <hr className="ignore" />
                <div id="content">
                    <center>
                        <div>
                            <strong>Hi You Can Here See All My Github Repositories</strong>
                            <br />
                            <p>There Is {projects.length} Repository In My Github</p>
                        </div>
                        <div>
                            {error ? (
                                <div>
                                    <hr />
                                    <h3>Cannot Load The Repositories</h3>
                                    <p>{String(error)}</p>
                                </div>
                            ) : (
                                <div>
                                    <hr />
                                    {projects
                                        .sort(
                                            (a, b) =>
                                                b.language?.length - a.language?.length &&
                                                b.description?.length - a.description?.length
                                        )
                                        .map(
                                            /**
                                             *
                                             * @param {{"id":416008457,"node_id":"R_kgDOGMvJCQ","name":"-laali-fortnite_api","full_name":"alighamdan/-laali-fortnite_api","private":false,"owner":{"login":"alighamdan","id":73795044,"node_id":"MDQ6VXNlcjczNzk1MDQ0","avatar_url":"https://avatars.githubusercontent.com/u/73795044?v=4","gravatar_id":"","url":"https://api.github.com/users/alighamdan","html_url":"https://github.com/alighamdan","followers_url":"https://api.github.com/users/alighamdan/followers","following_url":"https://api.github.com/users/alighamdan/following{/other_user}","gists_url":"https://api.github.com/users/alighamdan/gists{/gist_id}","starred_url":"https://api.github.com/users/alighamdan/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/alighamdan/subscriptions","organizations_url":"https://api.github.com/users/alighamdan/orgs","repos_url":"https://api.github.com/users/alighamdan/repos","events_url":"https://api.github.com/users/alighamdan/events{/privacy}","received_events_url":"https://api.github.com/users/alighamdan/received_events","type":"User","site_admin":false},"html_url":"https://github.com/alighamdan/-laali-fortnite_api","description":null,"fork":false,"url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api","forks_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/forks","keys_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/keys{/key_id}","collaborators_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/collaborators{/collaborator}","teams_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/teams","hooks_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/hooks","issue_events_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/issues/events{/number}","events_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/events","assignees_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/assignees{/user}","branches_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/branches{/branch}","tags_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/tags","blobs_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/git/blobs{/sha}","git_tags_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/git/tags{/sha}","git_refs_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/git/refs{/sha}","trees_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/git/trees{/sha}","statuses_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/statuses/{sha}","languages_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/languages","stargazers_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/stargazers","contributors_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/contributors","subscribers_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/subscribers","subscription_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/subscription","commits_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/commits{/sha}","git_commits_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/git/commits{/sha}","comments_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/comments{/number}","issue_comment_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/issues/comments{/number}","contents_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/contents/{+path}","compare_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/compare/{base}...{head}","merges_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/merges","archive_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/{archive_format}{/ref}","downloads_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/downloads","issues_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/issues{/number}","pulls_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/pulls{/number}","milestones_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/milestones{/number}","notifications_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/notifications{?since,all,participating}","labels_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/labels{/name}","releases_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/releases{/id}","deployments_url":"https://api.github.com/repos/alighamdan/-laali-fortnite_api/deployments","created_at":"2021-10-11T16:38:31Z","updated_at":"2021-10-15T19:57:12Z","pushed_at":"2021-10-11T16:42:04Z","git_url":"git://github.com/alighamdan/-laali-fortnite_api.git","ssh_url":"git@github.com:alighamdan/-laali-fortnite_api.git","clone_url":"https://github.com/alighamdan/-laali-fortnite_api.git","svn_url":"https://github.com/alighamdan/-laali-fortnite_api","homepage":null,"size":7,"stargazers_count":1,"watchers_count":1,"language":"TypeScript","has_issues":true,"has_projects":true,"has_downloads":true,"has_wiki":true,"has_pages":false,"forks_count":0,"mirror_url":null,"archived":false,"disabled":false,"open_issues_count":0,"license":null,"allow_forking":true,"is_template":false,"topics":[],"visibility":"public","forks":0,"open_issues":0,"watchers":1,"default_branch":"master"}} project
                                             */
                                            (project, i) => (
                                                <div class="repo">
                                                    <b>
                                                        <a
                                                            class="ownerhtmlurl"
                                                            href={project.owner.html_url}
                                                        >
                                                            {project.owner.login}
                                                        </a>
                                                    </b>{" "}
                                                    <b>
                                                        /{" "}
                                                        <a class="projecthtmlurl" href={project.html_url}>
                                                            {project.name}
                                                        </a>
                                                    </b>{" "}
                                                    <a className="lang" href={project.clone_url}>
                                                        {project.language
                                                            ? `${project.language}`
                                                            : "Fork Repo"}
                                                    </a>
                                                    <p className="desc">
                                                        {project.description ? project.description : ""}
                                                    </p>
                                                    <p>
                                                        CreatedAt:{" "}
                                                        <b>
                                                            {new Date(project.created_at).toLocaleString()}
                                                        </b>
                                                    </p>
                                                    {i !== projects.length - 1 ? (
                                                        <hr />
                                                    ) : (
                                                        <div>
                                                            <br />
                                                            <br />
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        )}
                                </div>
                            )}
                        </div>
                    </center>
                </div>
            </div>
        )
    );
}
