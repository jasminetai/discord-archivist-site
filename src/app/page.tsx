import Link from 'next/link';

export default function Home() {
  return (
    <>
      <article>
        <h1>About</h1>
        <p>
          Archivist is a Discord bot equipped with commands that{' '}
          <a href="https://bandit.rip">Super Bandit RIP</a> players will find useful. It features:
        </p>
        <ul>
          <li>Convenient lookups for profiles, leaderboards, and other game information</li>
          <li>Opt-in stat-tracking service for player and clan profiles</li>
          <li>Graph visualizations of profile statistics such as levels and KDR over time</li>
          <li>Enhanced statistical breakdowns of player profiles</li>
        </ul>
        <p>
          Try Archivist out in the{' '}
          <Link href="https://discord.gg/Gg9aMZJE5a">Bandit RIP Discord</Link>!
        </p>
      </article>

      <article>
        <h1>Adding Archivist to Your Server</h1>
        <p>
          Archivist is kept as a private bot, meaning that there is no public invite link for the
          bot. Scaling the bot up and obtaining official bot verification from Discord isn&apos;t
          currently planned due to the extent of the changes that doing so would require, which
          would include migrating the infrastructure to support slash commands and securing more
          resources for the bot.
        </p>
        <p>
          Unfortunately, this limits the number of servers Archivist can join. Consequently, we tend
          to deny requests for adding Archivist to inactive servers or servers unrelated to Super
          Bandit RIP.
        </p>
        <p>
          If you are still interested in adding Archivist to your server, reach out to @Dreamery in
          the official Bandit RIP Discord.
        </p>
      </article>
    </>
  );
}
