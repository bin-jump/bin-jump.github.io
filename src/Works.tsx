import Typography from "@mui/material/Typography";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Paper from "@mui/material/Paper";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import Link from "@mui/material/Link";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import SectionTitle from "./components/SectionTitle";

interface Work {
  title: string;
  description: string;
  bulletPoints: string[];
  persional: boolean;
  start: Date;
  end?: Date;
  links?: string[];
}

const WORKS: Work[] = [
  {
    title:
      "分析機器ユーザーの測定結果などのデータを一元管理し、データの活用を支援するシステムの設計・開発",
    description: "",
    bulletPoints: [
      "ユーザーがデータファイルをアップロード及び解析処理できるシステムの仕様設計、アーキテクチャ設計、バックエンド開発など",
      ".NET Coreフレームワーク及びPostgreSQLによるバックエンドの開発",
      "ドメイン駆動設計(DDD)に基づいたバックエンドの設計及び実装",
      "RESTful APIの設計",
      "Redisを用いたシングルサインオン仕組みを設計",
      "Reactによる仕様デモ作成",
      "クライアント側(Windowsソフトウェア)の処理部分の設計と実装",
    ],
    persional: false,
    start: new Date(2021, 4, 0),
  },
  {
    title: "ペットソーシャルアプリの設計・実装・デザイン",
    description: "",
    bulletPoints: [
      "ユーザーが投稿、コメント、いいね、フォローなどができるソーシャルメディアアプリのバックエンドとフロントエンドを作成",
      "Spring Bootフレームワークとドメイン駆動設計によるバックエンドを開発",
      "Spring Data JPAを用いてデータベースアクセス層を開発",
      "React Nativeを用いてモバイル側を開発",
      "React, React Reduxによる管理者機能(シングルページアプリケーション)を作成",
      "UI/UXを設計",
    ],
    persional: true,
    start: new Date(2021, 3, 0),
    links: [
      "https://github.com/bin-jump/petfabula_backend",
      "https://github.com/bin-jump/petfabula_client",
      "https://github.com/bin-jump/petfabula_admin",
    ],
  },

  {
    title: "社内データ基盤システムの開発及び測定データ管理システムの開発",
    description: "",
    bulletPoints: [
      "ユーザーがデータをアップロード及び閲覧できるシステムのフロントエンドとバックエンドの開発",
      ".NET CoreフレームワークとPostgreSQLによるバックエンドの開発",
      "Reactによるフロントエンドの開発",
      "ミドルウェアによる例外処理の提案と実装",
    ],
    persional: false,
    start: new Date(2019, 4, 0),
    end: new Date(2021, 3, 0),
  },

  {
    title: "画像関連ソフトウェアの開発・保守メンテナンス",
    description: "",
    bulletPoints: [
      "重たい処理をマルチスレッド化による速度向上",
      "メモリリークバグをGC関連ツールで修正",
      "同時処理におけるバグの修正",
      "既存のWindowsソフトウェアの機能追加",
    ],
    persional: false,
    start: new Date(2017, 8, 0),
    end: new Date(2019, 3, 0),
  },
];

const WorkItem = ({ work }: { work: Work }) => {
  const { title, description, bulletPoints, persional, links } = { ...work };
  const theme = useTheme();

  return (
    <Paper elevation={0} style={{ textAlign: "left", marginBottom: 40 }}>
      <Typography
        variant="subtitle2"
        component="span"
        sx={{ fontWeight: "bold" }}
      >
        {persional ? `${title}【個人プロジェクト】` : title}
      </Typography>

      <Typography>{description}</Typography>

      <ul style={{ listStyleType: "disc" }}>
        {bulletPoints.map((item) => (
          <li key={item}>
            <Typography variant="body2">{item}</Typography>
          </li>
        ))}
      </ul>

      {links && (
        <div style={{ marginTop: 12, paddingLeft: 8 }}>
          <Typography variant="caption">Links:</Typography>
          {links.map((item) => (
            <Link
              key={item}
              // underline="always"
              style={{
                marginTop: 6,
                display: "block",
                fontSize: 12,
                color: theme.palette.secondary.main,
                wordBreak: "break-all",
              }}
              href={item}
              target="_blank"
              rel="noreferrer"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </Paper>
  );
};

const dateStr = (date?: Date) => {
  return date ? `${date.getFullYear()}年${date.getMonth() + 1}月` : "現在";
};

export default function Works() {
  const theme = useTheme();

  return (
    <Container
      id="works"
      sx={{
        padding: { xs: 1, md: 16 },
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Container>
        <SectionTitle title={"Works"} />
      </Container>

      <div>
        <Timeline position="alternate" style={{ padding: 0 }}>
          {WORKS.map((item) => (
            <TimelineItem key={item.title}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                <Typography
                  sx={{ color: theme.palette.grey[500] }}
                  variant="caption"
                >
                  {`${dateStr(item.start)} 〜 ${dateStr(item.end)}`}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined">
                  {item.persional ? (
                    <PersonIcon
                      style={{ color: theme.palette.text.secondary }}
                    />
                  ) : (
                    <GroupsIcon
                      style={{ color: theme.palette.text.secondary }}
                    />
                  )}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <WorkItem work={item} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </Container>
  );
}
