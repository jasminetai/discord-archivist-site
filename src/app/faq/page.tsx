import Link from 'next/link';
import FaqEntry from '@/app/components/faqEntry';

export default function Faq() {
  return (
    <article>
      <h1>FAQ</h1>

      <p>
        The bot&apos;s default prefix of <code>,</code> is used for all example commands. The prefix
        may vary depending on a server&apos;s configuration, but can always be checked in the help
        message accessed by entering <code>@Archivist</code> in the target server.
      </p>

      <p>
        If your question isn&apos;t answered here, you can always ask for help in the official{' '}
        <Link href="https://discord.gg/Gg9aMZJE5a">Bandit RIP Discord</Link>, where many users are
        familiar with Archivist&apos;s commands.
      </p>

      <hr className="my-6" />

      <FaqEntry>
        <FaqEntry.Question>I can&apos;t add my account for stat-tracking!</FaqEntry.Question>
        <FaqEntry.Answer>
          <p>Check:</p>
          <ul>
            <li>
              Are you using the command correctly? For instance, <code>,add Archivist</code> would
              add an account named &ldquo;Archivist&rdquo;. Capitalization doesn&apos;t matter, but
              double-check your spelling.
            </li>
            <li>
              Are you joining the verification lobby while logged in with the specified account?
              Clicking the join link isn&apos;t enough; you need to be in the game lobby for
              Archivist to verify you.
            </li>
            <li>
              Are you joining the verification lobby quickly enough? The provided link expires 60
              seconds after the command is issued. You&apos;ll need to retry the command if the link
              expires.
            </li>
          </ul>
        </FaqEntry.Answer>
      </FaqEntry>

      <FaqEntry>
        <FaqEntry.Question>I can&apos;t add my clan for stat-tracking!</FaqEntry.Question>
        <FaqEntry.Answer>
          <p>Check:</p>
          <ul>
            <li>
              Are you using the command correctly? For instance, <code>,addclan CLAN</code> would
              add the clan &ldquo;CLAN&rdquo;. Note that <code>addclan</code> is a single word.
            </li>
            <li>
              Are you the leader of the clan? If not, you won&apos;t be able to add the clan. Only
              the clan leader can add their own clan to Archivist.
            </li>
            <li>
              If you are the leader, have you added the account that leads the clan using the{' '}
              <code>add</code> command first?
            </li>
          </ul>
        </FaqEntry.Answer>
      </FaqEntry>

      <FaqEntry>
        <FaqEntry.Question>I&apos;m having trouble with a different command.</FaqEntry.Question>
        <FaqEntry.Answer>
          <p>
            In general, it&apos;s a good idea to check that you are using a command correctly by
            doing <code>,help &lt;command&gt;</code>, which will give the required format for the
            specified command (e.g. <code>,help add</code> for the <code>add</code> command). If you
            are trying to use one of the two graph-related commands, you can get more detailed
            guidance with <code>,graph help</code> or <code>,graphclan help</code>.
          </p>
          <p>
            If you aren&apos;t seeing any response, you may also want to check that Archivist is
            able to access the channel you&apos;re trying to run commands in.
          </p>
        </FaqEntry.Answer>
      </FaqEntry>

      <FaqEntry>
        <FaqEntry.Question>Why is Archivist insulting me?</FaqEntry.Question>
        <FaqEntry.Answer>
          <p>
            You&apos;ve probably upset Archivist in some way. We can always reset the bot, but if
            we&apos;re being honest, it&apos;s a pretty stubborn bot.
          </p>
          <p>Your best bet is probably to apologize.</p>
        </FaqEntry.Answer>
      </FaqEntry>
    </article>
  );
}
