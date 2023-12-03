import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import theme from "../theme";
// import { Pressable } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  repoColor: {
    backgroundColor: "white",
  },
  flexCol: {
    flexDirection: "column",
  },
  repoHead: {
    flexDirection: "row",
    gap: 10,
    margin: 5,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  statStyle: {
    flexDirection: "column",
    textAlign: "center",
  },
  textBold: {
    fontWeight: theme.fontWeights.bold,
  },
  langBtn: {
    backgroundColor: theme.colors.primary,
    padding: 1,
    borderRadius: 2,
    width: "fit-content",
  },
  textNorm: {
    fontWeight: theme.fontWeights.normal,
  },
  langColor: {
    paddingHorizontal: 3,
    color: "white",
  },
  btn: {
    backgroundColor: "green",
  },
});

const RepoHead = ({ ownerAvatarUrl, fullName, description, language }) => {
  console.log(ownerAvatarUrl);
  return (
    <>
      <View style={styles.repoHead}>
        <Image
          source={{ uri: ownerAvatarUrl }}
          style={styles.image}
        />
        <View style={styles.flexCol}>
          <Text style={styles.textBold}>{fullName}</Text>
          <Text style={styles.textNorm}>{description}</Text>
          <Pressable style={styles.langBtn}>
            <Text style={styles.langColor}>{language}</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};
const RepoStat = ({ title, stat }) => {
  let newStat = stat;
  if (newStat >= 1000) {
    newStat = (newStat / 1000).toFixed(1) + "k";
  }
  return (
    <View style={styles.statStyle}>
      <Text>{newStat}</Text>
      <Text>{title}</Text>
    </View>
  );
};
const RepoStats = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => {
  return (
    <View style={styles.flexRow}>
      <RepoStat
        title="Stars"
        stat={stargazersCount}
      />
      <RepoStat
        title="Forks"
        stat={forksCount}
      />
      <RepoStat
        title="Reviews"
        stat={reviewCount}
      />
      <RepoStat
        title="Rating"
        stat={ratingAverage}
      />
    </View>
  );
};

export default function RepositoryItem({ repo }) {
  // const { item, separator, index } = repo;
  /* eslint-disable */
  const {
    id,
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = repo;
  /* eslint-enable */
  return (
    <View style={styles.repoColor}>
      <RepoHead
        ownerAvatarUrl={ownerAvatarUrl}
        fullName={fullName}
        description={description}
        language={language}
      />
      <RepoStats
        forksCount={forksCount}
        stargazersCount={stargazersCount}
        ratingAverage={ratingAverage}
        reviewCount={reviewCount}
      />
    </View>
  );
}
